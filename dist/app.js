"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const redis_cache_1 = require("./redisCache/redis.cache");
__exportStar(require("./models"), exports);
const server = new server_1.APIServer();
server.start();
process.on("exit", function () {
    console.log("enter exit function-->");
    (0, redis_cache_1.DisconnectRedis)();
});
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