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
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.buildGraphqlSchema = void 0;
const type_graphql_1 = require("type-graphql");
const path_1 = require("path");
const resolvers_1 = require("./resolvers/");
function buildGraphqlSchema() {
    return __awaiter(this, void 0, void 0, function* () {
        const resolvers = yield resolvers_1.resolverManager.getResolvers();
        if (!resolvers || resolvers.length === 0) {
            return;
        }
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers,
            emitSchemaFile: { path: (0, path_1.join)(process.cwd(), 'schema.gql') }
        });
        return schema;
    });
}
exports.buildGraphqlSchema = buildGraphqlSchema;
exports.typeDefs = `

type Book {
    title : String
    author : String
}

type Query {
    books : [Book]
}

`;
//# sourceMappingURL=schema.js.map