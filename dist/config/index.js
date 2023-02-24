"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadEnv_1 = __importDefault(require("./loadEnv"));
const startConfig_json_1 = __importDefault(require("./startConfig.json"));
exports.default = {
    loadEnv: loadEnv_1.default,
    startConfig: startConfig_json_1.default
};
//# sourceMappingURL=index.js.map