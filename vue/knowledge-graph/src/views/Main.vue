<template>
  <el-container>
    <el-aside :style="{width: asideWidth + 'px' , transition: 'width 0.2s',}" >
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header @isShowAside="isShowAside"></common-header>
      </el-header>
      <el-main>
        <common-main></common-main>
      </el-main>
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
import CommonMain from "../components/CommonMain";
export default {
  components: {
    CommonHeader,
    CommonAside,
    CommonFooter,
    CommonMain,
  },
  data() {
    return {
      asideWidth: 300,
    };
  },
  methods:{
    isShowAside(){      //打开与收起侧边导航
      this.asideWidth=this.asideWidth==300?0:300
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: rgb(40, 41, 43);
}
.el-main {
  padding: 0;
}
</style>