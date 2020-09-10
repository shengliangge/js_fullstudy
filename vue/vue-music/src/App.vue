<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon">&#xe681;</i>
      <span slot="content">我的音乐</span>
      <i class="iconfont" slot="right-icon">&#xe716;</i>
    </v-header>
    <!-- <router-view/> -->
    <v-sidebar></v-sidebar>
  </div>
</template>
<script>
import header from "@/components/header";
import sidebar from "@/components/sidebar";
export default {
  components: {
    "v-header": header,
    "v-sidebar": sidebar,
  },
};
</script>
<style lang="stylus">
@font-face {
  font-family: 'iconfont'; /* project id 2052924 */
  src: url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.eot');
  src: url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.woff2') format('woff2'), url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.woff') format('woff'), url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.ttf') format('truetype'), url('//at.alicdn.com/t/font_2052924_i7emdiwpf4b.svg#iconfont') format('svg');
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
