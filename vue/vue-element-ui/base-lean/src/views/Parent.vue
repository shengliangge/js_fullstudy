<template>
  <div>
    <h1>paent</h1>
    <h3>{{msg}}</h3>
    <m-child msg="父组件" @showMsg="showMsg"></m-child>
  </div>
</template>

<script>
import MChild from "./Child";
export default {
data(){
  return{
    msg:""
  }
},
  components:{
    MChild,
  },
  methods:{
    showMsg(val){
      this.msg=val
    },
  },
   mounted(){
      console.log(this.$children[0]);
    }
};
</script>

<style  scoped>
</style>