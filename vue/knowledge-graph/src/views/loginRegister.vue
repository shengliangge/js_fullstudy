<template>
  <div class="login-register">
    <div class="contain">
      <div class="big-box" :class="{active:isLogin}">
        <div class="big-contain" v-if="isLogin">
          <div class="btitle">用户登录</div>
          <div class="bform">
            <input type="mail" placeholder="邮箱" v-model="form.usermail" />
            <span class="errTips" v-if="mailError">* 邮箱填写错误 *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd" />
            <span class="errTips" v-if="mailError">* 密码填写错误 *</span>
          </div>
          <button class="bbutton" @click="login">登录</button>
        </div>
        <div class="big-contain" v-else>
          <div class="btitle">注册账号</div>
          <div class="bform">
            <!-- <input type="text" placeholder="邮箱" v-model="form.username" /> -->
            <input type="mail" placeholder="邮箱" v-model="form.usermail" />
            <span class="errTips" v-if="existed">* 邮箱已经存在！ *</span>
            <input type="password" placeholder="密码" v-model="form.userpwd" />
            <input type="password" placeholder="确认密码" v-model="form.checkUserpwd" />
          </div>
          <button class="bbutton" @click="register">注册</button>
        </div>
      </div>
      <div class="small-box" :class="{active:isLogin}">
        <div class="small-contain" v-if="isLogin">
          <div class="stitle">地质云知识图谱</div>
          <p class="scontent">东华理工大学</p>
          <button class="sbutton" @click="changeType">去注册</button>
        </div>
        <div class="small-contain" v-else>
          <div class="stitle">欢迎回来!</div>
          <p class="scontent">登录账户，共建知识图谱网络</p>
          <button class="sbutton" @click="changeType">去登录</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "login-register",
  data() {
    return {
      isLogin: false,
      mailError: false,
      passwordError: false,
      existed: false,
      form: {
        usermail: "",
        userpwd: "",
        checkUserpwd: "",
      },
    };
  },
  created() {
    this.isLogin = this.$route.query.isLogin === "false" ? false : true; //判断路由跳转传递的isLogin值，并赋值给isLogin，从而展示登陆或者注册
  },
  methods: {
    open2() {},
    changeType() {
      this.isLogin = !this.isLogin;
      this.form.usermail = "";
      this.form.userpwd = "";
      this.form.checkUserpwd = "";
    },
    // 登陆
    login() {
      const self = this;
      if (self.form.usermail.trim() != "" && self.form.userpwd.trim() != "") {
        const params = {
          mail: self.form.usermail,
          password: self.form.userpwd,
        };
        api
          .login(params)
          .then((res) => {
            console.log(res);
            if (res.code == 200) {
              console.log(res.data);
            }
          })
          .catch((res) => {
            console.log(res);
          });
      } else {
        alert("填写不能为空！");
      }
    },
    register() {
      const self = this;
      if (
        self.form.checkUserpwd != "" &&
        self.form.usermail != "" &&
        self.form.userpwd != ""
      ) {
        const params = {
          mail: self.form.usermail,
          password: self.form.userpwd,
          repassword: self.form.checkUserpwd,
        };
        api
          .Register(params)
          .then((res) => {
            this.$message({
              message: "恭喜你，这是一条成功消息",
              type: "success",
            });
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
        // self
        //   .$axios({
        //     method: "post",
        //     url: "http://127.0.0.1:10520/api/user/add",
        //     data: {
        //       checkUserpwd: self.form.checkUserpwd,
        //       mail: self.form.usermail,
        //       password: self.form.userpwd,
        //     },
        //   })
        //   .then((res) => {
        //     switch (res.data) {
        //       case 0:
        //         alert("注册成功！");
        //         this.login();
        //         break;
        //       case -1:
        //         this.existed = true;
        //         break;
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      } else {
        alert("填写不能为空！");
      }
    },
  },
};
</script>

<style scoped="scoped">
.login-register {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
.contain {
  width: 60%;
  height: 60%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 3px #f0f0f0, 0 0 6px #f0f0f0;
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btitle {
  font-size: 1.5em;
  font-weight: bold;
  color: rgb(57, 167, 176);
}
.bform {
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips {
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input {
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.bbutton {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: rgb(57, 167, 176);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.small-box {
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent {
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton {
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active {
  left: 0;
  transition: all 0.5s;
}
.small-box.active {
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
