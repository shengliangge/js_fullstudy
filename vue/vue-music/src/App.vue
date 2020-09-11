<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe681;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe716;</i>
    </v-header>
    <v-tab></v-tab>
    <keep-alive>
      <router-view />
    </keep-alive>
    <v-sidebar></v-sidebar>
  </div>
</template>
<script>
import header from "@/components/header";
import sidebar from "@/components/sidebar";
import tab from "@/components/tab";
export default {
  components: {
    "v-header": header,
    "v-sidebar": sidebar,
    "v-tab": tab,
  },
};
</script>
<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052924 */
  src: url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.eot');
  src: url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052924_7b1hed3vp2c.svg#iconfont') format('svg');
}

html, body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  background: rgba(8, 5, 58, 0.9);
  color: #fff;
}
</style>
