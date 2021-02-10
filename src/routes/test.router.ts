import { SuccessModel, ErrorModel } from '../models/res.model'
import { matchParentsRouter, createRouter } from '../utils/router.utils'

const router = createRouter()

router
  .use('', (ctx, next) => next())
  .get('/', ctx => {
    ctx.body = new SuccessModel({
      title: 'Hello World!',
      query: ctx.query,
      querystring: ctx.querystring,
      ctx,
    })
  })
  .post('/', ctx => {
    ctx.body = new SuccessModel({
      title: 'Hello World!',
      data: (ctx.request as any).body, // eslint-disable-line
      ctx,
    })
  })
  .get('/err', ctx => {
    ctx.body = new ErrorModel()
  })

export default matchParentsRouter('/test', router)

