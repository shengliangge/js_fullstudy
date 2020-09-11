<template>
  <div>
    <h3>4等分布局</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="content">1</div>
      </el-col>
      <el-col :span="6">
        <div class="content">2</div>
      </el-col>
      <el-col :span="6">
        <div class="content">3</div>
      </el-col>
      <el-col :span="6">
        <div class="content">4</div>
      </el-col>
    </el-row>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
  background-color: #000;
  color: #ffffff;
}
</style>