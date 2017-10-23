const Router = require('koa-router');
const router = new Router();

router.get('/api/v1', (ctx, next) => {
    ctx.body = "Hello World";
})

router.post('/api/v1/login', (ctx, next) => {
    console.log(ctx, next, this);
    ctx.body = {
        user: {
            username: 'Eric',
            password: 'abcdefghijklmnopqrstuvwxyz'
        }
    }
});

module.exports = router;
