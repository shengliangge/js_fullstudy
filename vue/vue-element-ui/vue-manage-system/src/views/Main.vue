<template>
  <el-container style="height:100%">
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
export default {
  components: {
    CommonHeader,
    CommonAside
  }
};
</script>

<style scoped>
.el-header {
  background-color: #333;
}
</style>