import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import { ErrorEnum, ErrorModel } from './models/res.model'

import testRouter from './routes/test.router'

const app = new Koa()
onerror(app)

app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}`)
  })
  .use(testRouter.routes())
  .use(testRouter.allowedMethods())
  .use(ctx => {
    console.log('NOT FOUNT')
    ctx.body = new ErrorModel(ErrorEnum.NotFount)
  })
  .on('error', (err, ctx) => console.error('server error', err, ctx))

export default app
