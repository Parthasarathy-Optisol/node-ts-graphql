"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolverManager = exports.ResolverManager = void 0;
const typescript_ioc_1 = require("typescript-ioc");
class ResolverManager {
}
exports.ResolverManager = ResolverManager;
class ResolverManagerImpl {
    constructor() {
        this.resolvers = [];
    }
    getResolvers() {
        return this.resolvers.splice(0);
    }
    registerResolver(resolver) {
        this.resolvers.push(resolver);
    }
}
exports.resolverManager = typescript_ioc_1.Container.get(ResolverManagerImpl);
//# sourceMappingURL=resolverManager.js.map