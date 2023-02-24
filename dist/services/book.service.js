"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_api_1 = require("./book.api");
const data_1 = require("./data");
class BookService extends book_api_1.bookApi {
    getBooks() {
        return data_1.book;
    }
}
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map