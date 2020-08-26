<template>
  <div class="htllo">
    <h1>hi页面</h1>
    <router-link :to="{name:'hi1',params:{name:'乐怡'}}">hi 一</router-link>
    <br />
    <router-link to="/hi/hi2">hi 二</router-link>
    <router-link to="/abc">404</router-link>
    <router-view />
    <div>{{$route.params.name}}</div>
  </div>
</template>

<script>
export default {
  name: "Hi",
  data() {
    return {
      msg: "Hi,I am wn",
    };
  },
  created() {
    console.log("123");
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入目标");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开目标");
    next();
  },
};
</script>

<style>
</style>