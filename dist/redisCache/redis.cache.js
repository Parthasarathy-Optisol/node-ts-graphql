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
exports.DisconnectRedis = exports.SetDataToCache = exports.GetDataFromCache = void 0;
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();
const GetDataFromCache = (key) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if data is already in Redis cache
    const cachedData = yield client.get(key);
    if (cachedData) {
        console.log("Retrieved data from cache");
        return JSON.parse(cachedData);
    }
});
exports.GetDataFromCache = GetDataFromCache;
const SetDataToCache = (key, result) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if data is already in Redis cache
    // Store data in Redis cache for 1 hour
    yield client.set(key, JSON.stringify(result), {
        EX: 1,
    });
});
exports.SetDataToCache = SetDataToCache;
const DisconnectRedis = () => __awaiter(void 0, void 0, void 0, function* () {
    yield client.disconnect();
});
exports.DisconnectRedis = DisconnectRedis;
//# sourceMappingURL=redis.cache.js.map