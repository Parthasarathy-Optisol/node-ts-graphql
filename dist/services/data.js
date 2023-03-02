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
exports.book = void 0;
const books_1 = __importDefault(require("../models/books"));
const redis_cache_1 = require("../redisCache/redis.cache");
const findBook = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, redis_cache_1.GetDataFromCache)("book");
    if (result) {
        return result;
    }
    else {
        result = yield books_1.default.find().exec();
        yield (0, redis_cache_1.SetDataToCache)("book", result);
        return result;
    }
});
exports.book = findBook()
    .then((data) => {
    return data;
})
    .catch((error) => console.error(error));
//# sourceMappingURL=data.js.map