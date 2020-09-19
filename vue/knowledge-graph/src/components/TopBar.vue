<template>
  <div class="topbar">
    <div class="left-input">
      <el-input v-model="input" class="topbar-inp" placeholder="请输入内容"></el-input>
      <el-button icon="el-icon-search">搜索</el-button>
    </div>
    <div class="mid-node">
      <div>当前节点：{{node}}</div>
      <div>关系数量：{{line}}</div>
    </div>
    <div class="right-btn">
      <el-button  icon="el-icon-plus">新建</el-button>
      <el-button  icon="el-icon-refresh">刷新</el-button>
      <el-button  icon="el-icon-full-screen">全屏</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      node: 5,
      line: 10,
    };
  },
};
</script>

<style>
.left-input {
  flex: 3;
  margin-left: 30px;
  display: flex;
  align-items: center;
}
.topbar-inp {
  margin-right: 10px;
}
.mid-node {
  display: flex;
  flex: 3;
  justify-content: center;
}
.right-btn {
  flex: 3.5;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
.el-button {
  margin-right: 0;
}

.topbar {
  display: flex;
  background-color: #eee;
  height: 50px;
  border-bottom: 1px solid rgb(205, 205, 205);
  display: flex;
  align-items: center;
}
</style>