<template>
  <div class="login">
    <h2>旅梦后台管理系统</h2>
    <div class="login-wrapper">
      <p class="input">
        <el-input v-model="user" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </p>
      <p class="btn">
        <el-button type="primary" round @click="login">登陆</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("123");
      if (!this.user || !this.password) {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error",
        });
      } else if (this.user === "admin" && this.password === "123456") {
        this.$message({
          showClose: true,
          message: "恭喜你，登陆成功",
          type: "success",
        });
        this.$router.push({ path: "/home" });
      } else {
        this.$message({
          showClose: true,
          message: "密码或用户名错误",
          type: "error",
        });
      }
    },
  },
};
</script>

<style>
.login {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(118, 224, 124);
}
.login-wrapper {
  margin-top: 30px;
  width: 250px;
}
.input {
  margin-bottom: 20px;
}
.btn button {
  width: 100%;
}
</style>