"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_onerror_1 = __importDefault(require("koa-onerror"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const index_1 = __importDefault(require("./routes/index"));
const app = new koa_1.default();
koa_onerror_1.default(app);
app.use(koa_bodyparser_1.default())
    .use(koa_json_1.default())
    .use(koa_logger_1.default())
    .use(function* (next) {
    const start = new Date().getTime();
    yield next;
    const ms = new Date().getTime() - start;
    console.log(`${this.method} ${this.url} - ${ms}`);
})
    .use(index_1.default.routes())
    .on('error', (err, ctx) => {
    console.error('server error', err, ctx);
});
exports.default = app;
