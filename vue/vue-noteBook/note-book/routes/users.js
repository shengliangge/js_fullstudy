const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
router.prefix('/users')


router.get('/all', async function (ctx, next) {
  await userService.getAllUsers().then((res) => {
    ctx.body = res
  })
})
// 登录注册
router.post('/userRegister', async (ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  var _nickname = ctx.request.body.nickname
  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名或密码或昵称不能为空'
    }
    return
  }
  let user = {
    username: _username,
    userpwd: _userpwd,
    nickname: _nickname
  }
  await userService.findUser(user.username).then(async (res) => {
    console.log(res);
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error);
      }
      ctx.body = {
        code: '80003',
        data: 'err',
        mess: '用户名已存在'
      }
    } else {
      await userService.insertUser([user.username, user.userpwd, user.nickname]).then(async (res) => {
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: '80004',
            data: r,
            mess: '注册失败'
          }
        }
      }).catch((err) => {
        ctx.body = {
          code: '80002',
          mess: err
        }
      })
    }
  }).catch((err) => {
    ctx.body = {
      cody: '80002',
      mess: err
    }
  })
})
module.exports = router
