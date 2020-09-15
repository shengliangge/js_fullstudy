<template>
  <div class="topbar">
    <el-input v-model="input" class="topbar-inp" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style>
.topbar {
  background-color: #eee;
  height: 50px;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
}

.el-input {
  width: 25%;
}
</style>