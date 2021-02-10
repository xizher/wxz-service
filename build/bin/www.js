"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const port = normalizePort(process.env.PORT || '3000');
const server = http_1.default.createServer(app_1.default.callback())
    .listen(port)
    .on('error', e => {
    if (e.syscall !== 'listen') { // eslint-disable-line
        throw e;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    /* eslint-disable */
    switch (e.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw e;
    }
    /* eslint-enable */
})
    .on('listening', () => {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug_1.default('demo:server')('Listening on ' + bind);
});
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
