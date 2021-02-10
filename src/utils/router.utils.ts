import Router from 'koa-router'

export function createRouter () : Router {
  return new Router()
}

export function matchParentsRouter (path: string, router: Router) : Router {
  return new Router()
    .use(path, router.routes(), router.allowedMethods())
}
