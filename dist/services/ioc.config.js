"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_ioc_1 = require("typescript-ioc");
const book_api_1 = require("./book.api");
const book_service_1 = require("./book.service");
const config = [
    {
        bind: book_api_1.bookApi,
        to: book_service_1.BookService,
        scope: typescript_ioc_1.Scope.Singleton,
    },
];
exports.default = config;
//# sourceMappingURL=ioc.config.js.map