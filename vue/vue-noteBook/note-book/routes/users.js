const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')
const util = require('../controllers/utils')
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

router.post("/userLogin", async (ctx, next) => {
  const _username = ctx.request.body.username;
  const _userpwd = ctx.request.body.userpwd;
  if (_username && _userpwd) {
    await userService.userLogin(_username, _userpwd).then((res) => {
      if (!res.length) {
        try {
          throw Error("用户密码错误");
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: "80005",
          data: "err",
          msg: "账号密码错误",
        };
      } else {
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username
        }
        ctx.body = {
          code: "80000",
          r: result,
          msg: "登录成功",
        };
      }
    });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
});

//根据分类类名查找笔记列表
router.post('/findNoteListByType', async function (ctx, next) {
  const note_type = ctx.request.body.note_type;
  const userId = ctx.request.body.userId;
  await userService.findNoteListByType(note_type, userId).then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
        ctx.body = {
          code: 80000,
          data: res,
          mess: '查找成功'
        }
    } else {
      r = 'error',
        ctx.body = {
          code: 80004,
          data: r,
          mess: '查找失败'
        }
    }
  }).catch(() => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

//根据id查找文章详情
router.post('/findNoteDetailById', async function (ctx, next) {
  const id = ctx.request.body.id;
  await userService.findNoteDetailById(id).then(async (res) => {
    let r = ''
    if (res.length) {
      r = 'ok',
        ctx.body = {
          code: "80000",
          data: res[0],
          mess: '查找成功'
        }
    } else {
      r = 'error',
        ctx.body = {
          code: "80004",
          data: r,
          mess: '查找失败'
        }
    }
  }).catch(() => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})


//发表笔记
router.post('/insertNote', async function (ctx, next) {
  let c_time = utils.getNowFormatDate();
  let m_time = utils.getNowFormatDate();
  let note_content = ctx.request.body.note_content;
  let head_img = ctx.request.body.head_img
  let title = ctx.request.body.title
  let note_type = ctx.request.body.note_type
  let useId = ctx.request.body.userId
  let nickname = ctx.request.body.nickname
  await userService.insertNote([c_time, m_time, note_content, head_img, title, note_type, useId, nickname])
    .then(async (res) => {
      let r = ''
      if (res.affectedRows !== 0) {
        r = 'ok'
        ctx.body = {
          code: "80000",
          data: r,
          mess: '发表成功'
        }
      } else {
        r = 'error',
          ctx.body = {
            code: "80004",
            data: r,
            mess: '发表失败'
          }
      }
    }).catch((err) => {
      ctx.body = {
        code: '80002',
        data: err
      }
    })
})


router.post('/register', async function (ctx, next) {
  let mail = ctx.request.body.mail
  let password = ctx.request.body.password
  await userService.register([mail, password])
    .then(async (res) => {
      let r = ''
      if (res.affectedRows !== 0) {
        r = 'ok'
        ctx.body = {
          code: 202,
          data: [{
            uid: 1,
            mail: "541975984@qq.com",
            role: 0,
            mail_state: 0
          }],
          msg: "注册成功，请登录邮箱激活账号！",
          success: true
        }
      } else {
        r = 'error',
          ctx.body = {
            code: 203,
            data: "203_当前账号已注册！",
            msg: "当前账号已注册！",
            success: false
          }
      }
    }).catch((err) => {
      ctx.body = {
        code: '80002',
        data: err
      }
    })
})


router.post("/login", async (ctx, next) => {
  const mail = ctx.request.body.mail;
  const password = ctx.request.body.password;
  if (mail && password) {
    await userService.login(mail, password).then((res) => {
      if (!res.length) {
        try {
          throw Error("用户密码错误");
        } catch (err) {
          console.log(err);
        }
        ctx.body = {
          code: "402",
          data: "err",
          msg: "账号或密码错误",
          success: false
        };
      } else {
        let result = {
          id: res[0].id,
          mail: res[0].mail
        }
        ctx.body = {
          code: "200",
          data: [{
            "uid": 1,
            "logtime": 1222223222,
            "mail": "541975984@qq.com",
            "role": 0,
            "mail_state": 1
          }],
          msg: "登录成功",
          success: true
        };
      }
    });
  } else {
    ctx.body = {
      code: "80001",
      msg: "用户名、密码或昵称不能为空",
    };
  }
});
module.exports = router
