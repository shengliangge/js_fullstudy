<template>
  <!-- fragment   可以让我们少写一个根节点-->
  <ul>
    <FragmentDemo :data='[5,2,3,6,9]'></FragmentDemo>
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
export default {
  components: {
    FragmentDemo,
  },
};
</script>

<style>
</style>