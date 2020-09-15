const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/all', async function (ctx, next) {
  await userService.getAllUsers().then((res) => {
    ctx.body = res
  })
})
module.exports = router
