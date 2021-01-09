# GraphQL client
## Установка
### CDN
Для использования без сборщиков проектов достаточно подключить к странице файл "./build/graphql.js";
```html
<script src="graphql.js"></script>
```

Всё, теперь нам доступен конструктор Graphql:
```js
let client = new Graphql('http://api.loc/graphql/project');
```

### NPM
Устанавливаем пакет:
```
npm i graphql-awesome-client
```

Используем конструктор Graphql:
```ts
import Graphql from "./Client";
let client = new Graphql('http://api.loc/graphql/project');
```

## Почему эта библиотека?
Синтаксис Graphql - это своего рода декларативный язык, как SQL, и его запросы могут быть довольно объемными и неприятными
в построении. 
В приложениях программист работает с такими типами, как объекты, массивы, скаляры и прочие типы данных, но передавать их
по сети в таком формате невозможно, и приходится переводить их в строку запроса при помощи шаблонизации В РУЧНУЮ. Это
довольно трудоемкий и неприятный процесс, который отнимает время на написание и отладку.

Причиной создания этой библиотеки стало то, что все существующие на данный момент клиенты Graphql работают по принципу:
"Напиши мне запрос, я его отправлю". Работа с такими библиотеками выглядит так:
```js
// сами составили запрос
let query = `query{
  Order{
    getOne(ProjectAuth:{id:"1",token:"$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"},orderId:96)
    	{
        id,
        projectId
      },
    getMany(ProjectAuth:{id:"1",token:"$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"},orderIds:[96])
    	{
        id,
        projectId
      }
  }
}`; 

// сами его отправили
client.send(query);
```
Не самый приятный процесс, писать такие запросы в JS-файле, не правда ли?
Данная библиотека пошла дальше, и позволяет Вам отдавать ей просто данные, а всё остальное она сделает сама!
Как? Очень просто:
```js
client.querySingle(
    'Order.getOne', //path
    {ProjectAuth: {id:"1", token: "$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"}, orderId: 96}, //input
    ['id','projectId']    //output
).then((data) => {console.log(JSON.stringify(data))});
```
Мы передаем данные для отправки на сервер, библиотека сама превратит эти данные вот в такой запрос:
```
query{Order{getOne(ProjectAuth:{id:"1",token:"$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"},orderId:96){id,projectId}}}
```
И в промисе вернет Вам то, что вернул сервер, в моем случае это объект:
```json
{
  "Order": {
    "getOne": {
      "id":"96",
      "projectId":"1"
    }
  }
}
```

Обратиться к нескольким методам за один заход тоже довольно просто:
```js
client.queryMultiple([
    {
        path: 'query.Order.getOne',
        input: {ProjectAuth: {id:"1", token: "$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"}, orderId: 96},
        output: ['id','projectId']
    },
    {
        path: 'query.Order.getMany',
        input: {ProjectAuth: {id:"1", token: "$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"}, orderIds: [95,96]},
        output: ['id','projectId']
    },
]).then((data) => {console.log(JSON.stringify(data))});
```
Запрос:
```
query{Order{getOne(ProjectAuth:{id:"1",token:"$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"},orderId:96){id,projectId},getMany(ProjectAuth:{id:"1",token:"$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"},orderIds:[95,96]){id,projectId}}}
```
Ответ:
```
{"Order":{"getOne":{"id":"96","projectId":"1"},"getMany":[{"id":"95","projectId":"1"},{"id":"96","projectId":"1"}]}}
```

## Использование
todo:)
