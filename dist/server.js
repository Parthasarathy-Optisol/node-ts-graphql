"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIServer = void 0;
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const typescript_rest_1 = require("typescript-rest");
const server_1 = require("@apollo/server");
const schema_1 = require("./schema");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = require("body-parser");
const index_1 = __importDefault(require("./config/index"));
index_1.default.loadEnv();
const StartConfig = index_1.default.startConfig[process.env.NODE_ENV];
class APIServer {
    constructor(app = (0, express_1.default)(), apiContext = StartConfig["context-root"]) {
        // this.app.use();
        this.app = app;
        this.server = null;
        this.PORT = StartConfig.port;
        const apiRouter = express_1.default.Router();
        typescript_rest_1.Server.loadServices(apiRouter, ["controllers/*"], __dirname);
        if (!apiContext || apiContext === "/") {
            this.app.use(apiRouter);
        }
        else {
            this.app.use(apiContext, apiRouter);
        }
        new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = (yield (0, schema_1.buildGraphqlSchema)());
                const graphqlServer = new server_1.ApolloServer({ schema });
                yield graphqlServer.start();
                this.app.use(cors(), (0, body_parser_1.json)(), (0, express4_1.expressMiddleware)(graphqlServer));
                resolve(graphqlServer);
            }
            catch (e) {
                reject(e);
            }
        }))
            .then((graphqlServer) => {
            console.log(`server started successfully`);
        })
            .catch((error) => {
            console.log("server did not Start - ERROR on startup");
            console.log(error);
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.server = this.app.listen(this.PORT, () => {
                    const addressInfo = this.server.address();
                    const address = addressInfo.address === "::" ? "localhost" : addressInfo.address;
                    console.log(`Lisining to http://${address}:${addressInfo.port}`);
                });
            });
        });
    }
    getApp() {
        return this.app;
    }
}
exports.APIServer = APIServer;
exports.default = StartConfig;
//# sourceMappingURL=server.js.map