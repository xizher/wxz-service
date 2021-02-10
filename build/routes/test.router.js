"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const res_model_1 = require("../models/res.model");
const router_utils_1 = require("../utils/router.utils");
const router = router_utils_1.createRouter();
router
    .use('', (ctx, next) => next())
    .get('/', ctx => {
    ctx.body = new res_model_1.SuccessModel({
        title: 'Hello World!',
        query: ctx.query,
        querystring: ctx.querystring,
        ctx,
    });
})
    .post('/', ctx => {
    ctx.body = new res_model_1.SuccessModel({
        title: 'Hello World!',
        data: ctx.request.body,
        ctx,
    });
})
    .get('/err', ctx => {
    ctx.body = new res_model_1.ErrorModel();
});
exports.default = router_utils_1.matchParentsRouter('/test', router);
