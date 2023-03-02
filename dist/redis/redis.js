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
exports.setDataToCache = exports.getDataFromCache = void 0;
const redis_1 = __importDefault(require("redis"));
const util_1 = require("util");
const client = redis_1.default.createClient();
client.on("error", (err) => {
    console.error(err);
});
// Promisify Redis methods
const getAsync = (0, util_1.promisify)(client.get).bind(client);
const setexAsync = (0, util_1.promisify)(client.setEx).bind(client);
const getDataFromCache = (key) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if data is already in Redis cache
    const cachedData = yield getAsync(key);
    if (cachedData) {
        console.log("Retrieved data from cache");
        return JSON.parse(cachedData);
    }
});
exports.getDataFromCache = getDataFromCache;
const setDataToCache = (key, result) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if data is already in Redis cache
    // Store data in Redis cache for 1 hour
    yield setexAsync(key, 3600, JSON.stringify(result));
});
exports.setDataToCache = setDataToCache;
//# sourceMappingURL=redis.js.map