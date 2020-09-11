<template>
  <header class="commonHeader">
    <div class="left">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
      <div class="l-content">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="current.path">{{current.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img :src="userImg" alt class="user" />
          <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return {
      userImg: require("../assets/images/user.png")
    };
  }
};
</script>

<style>
.commonHeader {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
.r-content .user {
  width: 40px;
  height: 40px;
  border-radius: 50px;
}
.el-button {
  margin-right: 50px;
}
.left {
  display: flex;
  align-items: center;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: #fff;
}
</style>