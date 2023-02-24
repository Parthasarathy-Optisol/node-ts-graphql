"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.bookResolver = void 0;
const resolverManager_1 = require("./resolverManager");
const type_graphql_1 = require("type-graphql");
const typescript_ioc_1 = require("typescript-ioc");
const data_json_1 = __importDefault(require("../data.json"));
const schemas_1 = require("../schemas");
const services_1 = require("../services");
let bookResolver = class bookResolver {
    books() {
        return this.bookService.getBooks();
    }
};
__decorate([
    typescript_ioc_1.Inject,
    __metadata("design:type", services_1.bookApi)
], bookResolver.prototype, "bookService", void 0);
__decorate([
    (0, type_graphql_1.Query)((returns) => [schemas_1.Books]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], bookResolver.prototype, "books", null);
bookResolver = __decorate([
    (0, type_graphql_1.Resolver)(schemas_1.Books)
], bookResolver);
exports.bookResolver = bookResolver;
exports.resolvers = {
    Query: {
        books: () => data_json_1.default,
    },
};
resolverManager_1.resolverManager.registerResolver(bookResolver);
//# sourceMappingURL=book.resolver.js.map