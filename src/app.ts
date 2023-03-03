import { APIServer } from "./server";
export * from "./models"

const server = new APIServer();
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
