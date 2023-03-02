"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const loadEnv = () => {
    return dotenv_1.default.config().parsed;
};
exports.default = loadEnv;
//# sourceMappingURL=loadEnv.js.map