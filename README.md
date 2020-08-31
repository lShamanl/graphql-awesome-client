# Предисловие
Прошу обратить внимание, что библиотека находится на стадии активной разработки, поэтому в ней могут встречаться баги.

# Быстрый старт
Библиотека поддерживает стандартный вариант использования, при котором запрос от начала до конца пишется разработчиком:
```typescript
import Graphql from "graphql-awesome-client";

let graphql = new Graphql('http://api.domain.loc/graphql/user');

graphql.send(`
    query {
      UserService {
        checkEmail(email: "example@mail.ru") {
          ok,
          code,
          description
        }
      }
    }
`);
```

Это замечательный подход, но иногда складывается такая ситуация, что запросы становятся довольно громоздкими, и занимают несколько сотен строк. 
В этом случае писать запросы в IDE становится некомфортно, т.к. очень просто допустить ошибку, или столкнуться с обновлением
схемы на сервере.
В этом случае разработчик обычно начинает в ручную исправлять все запросы, которые были сломаны, или некорректно написаны.

Далее, после выполнения запроса сервер возвращает данные в JSON-формате, которые необходимо куда-либо сохранять для дальнейшей работы.

## Модели-ориентированный подход
Данная библиотека предлагает более продвинутый способ организации работы с API, разработанном на GraphQL.
Мы считаем, что нет необходимости составлять длинные запросы вручную, а также реализовывать стандартную логику для всех
сущностей, которые приходят с сервера, если это можно делегировать данной библиотеке.

Просто сравните два идентичных по своей сути действия:
1) Стандартный подход:
```typescript
import Graphql from "graphql-awesome-client";

let graphql = new Graphql('http://api.domain.loc/graphql/user');
let query = `
mutation {
  Tasks {
    TaskCategory {
      create(UserAuth: {id: 4, token: "8c59069c4e5797e6fg08213g08g4faae9112aeec"}, TaskCategory: {name: "field-1", alias: "field-3", description: "field-2"}) {
        id
        userId
        name
        alias
        description
        isArchived
        createdAt {
          timestamp
        }
        errors {
          ok
          code
          description
        }
      }
    }
  }
}
`;

graphql.send(query)
    .then((data) => {
      console.log(data); // Ответ от сервера
    })
    .catch((error) => {
      console.log(error); // Ответ от сервера, в случае ошибки
    });
```

2) Вариант, который предлагает данная библиотека:
```typescript
import Graphql from "graphql-awesome-client";

let graphql = new Graphql('http://api.domain.loc/graphql/user');

let params = Object.assign({},
    userAuthInput.getInputSchema(),
    taskCategory.getInputSchema()
);

graphql.sendMutation('Tasks.TaskCategory.create', params, TaskCategory.getOutputSchema())
    .then((data) => {
      console.log(data); // Ответ от сервера
    })
    .catch((error) => {
      console.log(error); // Ответ от сервера, в случае ошибки
    });
```
И это еще короткий запрос на ~20 строк, на практике запросы к GraphQl могут достигать нескольких сотен форматированных строк.
А при использовании подхода, предлагаемого данной библиотекой - будет добавлено ровно по 1 строке, на каждый запрос:
```typescript
import Graphql from "graphql-awesome-client";

let graphql = new Graphql('http://api.domain.loc/graphql/user');
let namespace = 'tasks.updateAllTaskData';

graphql.addQuery(
    'TaskService.TaskCategoryQuery.fetch', params, TaskCategory.getOutputSchema(), namespace
);
graphql.addQuery(
    'TaskService.TaskListQuery.fetch', params, TaskList.getOutputSchema(), namespace
);
graphql.addQuery(
    'TaskService.TaskQuery.fetch', params, Task.getOutputSchema(), namespace
);

graphql.pushQueries(namespace)
.then((data) => {
    console.log(data.TaskService.TaskCategoryQuery.fetch); // Ответ от сервера на первый запрос
    console.log(data.TaskService.TaskListQuery.fetch); // Ответ от сервера на второй запрос
    console.log(data.TaskService.TaskQuery.fetch); // Ответ от сервера на третий запрос
})
.catch((error) => {
    console.log(error);
});
```
Аналогичный вариант с ручным написание запроса сюда дублироваться не будет, т.к. его форматированный вид занимает 101 строку.

## Продвинутое использование библиотеки
За счет чего достигается данная магия? За счет ООП, и мапперов!

В библиотеке предусмотрены 3 варианта базовых типов:
- OutputType: тип, предназначенный только для получения схемы возвращаемых данных
- InputType: тип, предназначенный только для передачи в качестве параметра
- ModelType: тип, объединяющий в себе два предыдущих, его можно использовать как в качестве аргумента, так и возвращаемой структуры данных.

### Пример использования InputType:
```typescript
/** class UserAuth.ts */
import {InputType} from "graphql-awesome-client";
import Types from "../Types";

class UserAuth extends InputType {
  public id: number;
  public token: string;

 /**
  * Возвращает название класса(Типа данных GraphQl)
  */
  static getClassName(): string
  {
    return 'UserAuth';
  }

  static map(): Object {
    return {
      id: {
        type: Number, // тип поля
        output: false, // использовать ли в схеме принимаемых данных
        input: true // использовать ли в схеме параметров (исходящих данных)
      },
      token: {
        type: String,
        output: false,
        input: true
      },
    }
  }

  public mutation(data: any = {}): void
  {
    this.autoMutation(data, Types);
  }

}

export default UserAuth;
```

Для ModelType и OutputType правила идентичны, только в них добавляется еще один метод:
```typescript
  static getOutputSchema(settings = {allowedFields: [], forbiddenFields: [], schemaRules: {}}): Object
  {
    return ModelType.prepareOutputSchema(settings, UserAuth);
  }
```
Вторым аргументом в него необходимо передавать конструктор текущего класса (его название без кавычек).

Метод "getOutputSchema" в качестве параметров принимает объект с настройками, с помощью него можно влиять на итоговую схему
данных, которая будет возращена, можно указать разрешенные, или запрещенные поля для ТЕКУЩЕГО запроса, а также указать
специфические правила для формирования схемы. Данная возможность оставлена для тонкой настройки запросов, на практике её
использование на текущий момент не рекомендовано.
