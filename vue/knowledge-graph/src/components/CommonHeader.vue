<template>
  <header class="commonHeader">
    <div class="left">
      <el-button icon="el-icon-s-fold" size="mini" @click="isShowAside"></el-button>
      <div class="l-content"></div>
    </div>

    <div class="r-content">
      <el-dropdown trigger="click" v-if="isLogin">
        <span class="el-dropdown-link">
          <img :src="userImg" alt class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="right-contetn" v-else>
        <el-button @click="gotoLogin">登陆</el-button>
        <el-button @click="gotoRegister">注册</el-button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  data() {
    return {
      userImg: require("../assets/images/user.png"),
      isLogin: false,
    };
  },
  methods: {
    isShowAside() {
      this.$emit("isShowAside");
    },
    gotoLogin() {
      this.$router.push({ path: "/login", query: { isLogin: true } });
    },
    gotoRegister() {
      this.$router.push({ path: "/register", query: { isLogin: false } });
    },
  },
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