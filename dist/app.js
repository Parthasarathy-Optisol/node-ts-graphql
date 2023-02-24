"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const server = new server_1.APIServer();
server.start();
/**
 * Old CODE ------------------
 */
// const server = new ApolloServer({
//   typeDefs: typeDefs,
//   resolvers: resolvers,
// });
// const urlPromise = (async () => {
//   const { url } = await startStandaloneServer(server, {
//     listen: { port: PORT },
//   });
//   return url;
// })();
// urlPromise.then(url=>{
//     console.log(`App running on URL ${url}`);
// })
// import Start from './server';
// console.log(Start)
//# sourceMappingURL=app.js.map