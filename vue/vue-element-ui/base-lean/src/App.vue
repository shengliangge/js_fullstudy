<template>
  <div id="app">
    <!-- <button @click="passMsg">传你</button>
   <m-parent></m-parent> -->
   <!-- <router-link to="/home">home</router-link> -->
   <!-- <button @click="toHome">home</button> -->
    <router-view/>
  </div>
</template>

<style>

</style>
<script>
import bus from './util/bus'
import MParent from './views/Parent'
export default{
components:{
  MParent,
},
methods:{
  passMsg(){
    bus.$emit('msg','i am from app')
  },
  toHome(){
    this.$router.push({path:'/home'})
  }
},

}
</script>