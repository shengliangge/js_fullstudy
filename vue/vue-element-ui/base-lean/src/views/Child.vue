<template>
  <div>
    <h3>child</h3>
    <h5>{{msg}}</h5>
    <button @click="passMsg">走你</button>
  </div>
</template>

<script>
import bus from '../util/bus'
export default {
  props: {
    msg: {
      type: String,
      default: "默认"
    },
  },
  data(){
    return {
      childMsg:'child msg'
    }
  },
  methods: {
    passMsg() {
      this.$emit('showMsg','i am from child')
    }
  },
  mounted(){
  bus.$on('msg',(val)=>{
    this.childMsg=val
  })
}
};
</script>

<style scope>
</style>