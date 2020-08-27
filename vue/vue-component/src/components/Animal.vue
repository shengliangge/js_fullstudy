<template>
  <div class="animal">
    <p>我的宠物：{{baby}}</p>
    <p>我的宠物：{{babyName}}</p>
  </div>
</template>
<script>
export default {
  props: {
    babyName: {
      type: String,
      default: "asdf",
      validator: function (value) {
        console.log(value)
        return value == "" ? "小白" : "adf";
      },
    },
  },
  data() {
    return {
      baby: "小白",
    };
  },
};
</script>

<style>
</style>