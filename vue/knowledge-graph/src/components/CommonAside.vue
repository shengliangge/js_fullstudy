<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="rgb(247,249,252)"
    text-color="#333"
    active-text-color="#ffd04b"
  >
    <div class="logo">
      <img :src="userImg" class="aside-logo" alt />
    </div>
    <h2 class="list-title">图谱列表</h2>
    <div class="btn">
      <el-button class="aside_btn"  round>公共图谱</el-button>
    </div>
      <div class="btn">
      <el-button class="aside_btn" round>我的图谱</el-button>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      userImg: require("../assets/images/logo.png"),
    };
  },
  methods: {},
};
</script>

<style>
.el-menu {
  height: 100vh;
}
.btn{
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.list-title {
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
}
.aside_btn {
  margin-right: 0;
}
.el-button.is-round{
  padding: 12px 80px;

}
.logo {
  width: 100%;
  height: 60px;
  background-color: rgb(40, 41, 43);
  display: flex;
  justify-content: center;
}
.aside-logo {
  padding: 5px;
  text-align: center;
  height: 55px;
  box-sizing: border-box;
}
</style>