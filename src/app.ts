import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import indexRouter from './routes/index'

const app = new Koa()
onerror(app)

app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(function *(next) {
    const start = new Date().getTime()
    yield next
    const ms = new Date().getTime() - start
    console.log(`${this.method} ${this.url} - ${ms}`)
  })
  .use(indexRouter.routes())
  .on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  })

export default app
