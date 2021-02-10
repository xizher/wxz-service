import Router from 'koa-router'

const router = new Router()

router.get('/', function *() {
  yield this.body = {
    msg: 'hello world!'
  }
})

export default router

