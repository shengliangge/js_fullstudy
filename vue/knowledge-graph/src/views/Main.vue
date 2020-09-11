<template>
  <el-container>
    <el-aside width="300px" height="1000px">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <common-footer></common-footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
import CommonFooter from "../components/CommonFooter";
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonFooter,
  },
};
</script>

<style scoped>
.el-header {
  background-color: rgb(40, 41, 43);
}
</style>