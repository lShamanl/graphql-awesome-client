import Graphql from "./Client";
// @ts-ignore
window.Graphql = Graphql;

let client = new Graphql('http://api.crm.loc/graphql/project');
client.mutationSingle(
'query.Order.getOne',
{ProjectAuth: {id:"1", token: "$2y$10$lcZ9X3Ae2uvPwYAXpuWX.u8Pi02iiC4pZfagdRHufrUnAnJYlj19q"}, orderId: 96},
['id','projectId']
).then((data) => {console.log(JSON.stringify(data))});
