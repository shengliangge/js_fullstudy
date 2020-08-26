<template>
  <div class="hi">我是hi2
  <button @click="goBack">返回上一个页面</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    goBack(){
      // 编程式导航
      this.$router.push({path:'/hi',query:{name:'蜗牛'}})
      // this.$router.push({path:'/hi',params:{name:'蜗牛'}})
    }
  }
};
</script>

<style>
</style>