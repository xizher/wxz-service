"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchParentsRouter = exports.createRouter = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
function createRouter() {
    return new koa_router_1.default();
}
exports.createRouter = createRouter;
function matchParentsRouter(path, router) {
    return new koa_router_1.default()
        .use(path, router.routes(), router.allowedMethods());
}
exports.matchParentsRouter = matchParentsRouter;
