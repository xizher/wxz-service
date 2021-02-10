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
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_onerror_1 = __importDefault(require("koa-onerror"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const res_model_1 = require("./models/res.model");
const test_router_1 = __importDefault(require("./routes/test.router"));
const app = new koa_1.default();
koa_onerror_1.default(app);
app.use(koa_bodyparser_1.default())
    .use(koa_json_1.default())
    .use(koa_logger_1.default())
    .use((ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const start = new Date().getTime();
    yield next();
    const ms = new Date().getTime() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
}))
    .use(test_router_1.default.routes())
    .use(test_router_1.default.allowedMethods())
    .use(ctx => {
    console.log('NOT FOUNT');
    ctx.body = new res_model_1.ErrorModel(res_model_1.ErrorEnum.NotFount);
})
    .on('error', (err, ctx) => console.error('server error', err, ctx));
exports.default = app;
