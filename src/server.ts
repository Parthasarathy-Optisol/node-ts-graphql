import { default as express } from "express";
import cors = require("cors");
import { Server } from "typescript-rest";
import { ApolloServer } from "@apollo/server";
import { GraphQLSchema } from "graphql";
import { buildGraphqlSchema } from "./schema";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import { AddressInfo } from "net";
import { json } from "body-parser";

import config from "./config/index";

config.loadEnv();

const StartConfig = config.startConfig[process.env.NODE_ENV];

export class APIServer {
  private server: http.Server = null;
  public PORT = StartConfig.port;
  constructor(
    private readonly app: express.Application = express(),
    apiContext = StartConfig["context-root"]
  ) {
    // this.app.use();

    const apiRouter: express.Router = express.Router();
    Server.loadServices(apiRouter, ["controllers/*"], __dirname);

    if (!apiContext || apiContext === "/") {
      this.app.use(apiRouter);
    } else {
      this.app.use(apiContext, apiRouter);
    }
    new Promise<ApolloServer>(async (resolve, reject) => {
      try {
        const schema: GraphQLSchema = (await buildGraphqlSchema()) as any;
        const graphqlServer = new ApolloServer({ schema });
        await graphqlServer.start();
        this.app.use(cors(), json(), expressMiddleware(graphqlServer));
        resolve(graphqlServer);
      } catch (e) {
        reject(e);
      }
    })
      .then((graphqlServer) => {
        console.log(`server started successfully`);
      })
      .catch((error) => {
        console.log("server did not Start - ERROR on startup");
        console.log(error);
      });
  }

  public async start(): Promise<APIServer> {
    return new Promise<APIServer>((resolve, reject) => {
      this.server = this.app.listen(this.PORT, () => {
        const addressInfo = this.server.address() as AddressInfo;
        const address =
          addressInfo.address === "::" ? "localhost" : addressInfo.address;
        console.log(`Lisining to http://${address}:${addressInfo.port}`);
      });
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}

export default StartConfig;
