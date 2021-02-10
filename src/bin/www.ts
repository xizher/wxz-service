import app from '../app'
import debug from 'debug'
import http from 'http'

const port = normalizePort(process.env.PORT || '3000')

const server = http.createServer(app.callback())
  .listen(port)
  .on('error', e => {
    if ((e as any).syscall !== 'listen') { // eslint-disable-line
      throw e
    }
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port
    /* eslint-disable */
    switch ((e as any).code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
        break
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
        break
      default:
        throw e
    }
    /* eslint-enable */
  })
  .on('listening', () => {
    const addr = server.address()
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
    debug('demo:server')('Listening on ' + bind)
  })


function normalizePort (val: string) {
  const port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
