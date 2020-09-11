<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="rgb(247,249,252)"
    text-color="#333"
    active-text-color="#ffd04b"
  >
  <div class="logo">
    <img src="" alt="">
  </div>
  <h2 class="list-title">图谱列表</h2>
   <el-button class="aside_btn" round>公共图谱</el-button>

  </el-menu>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {
   
  }
};
</script>

<style>
.el-menu {
  height: 100vh;
  border: none;
}
.list-title{
  text-align: center;
  font-size: 30px;
}
</style>