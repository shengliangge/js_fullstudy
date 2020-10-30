<template>
  <h1>加载中{{ loading }}</h1>
</template>

<script>
import { ref } from "vue";
import { onUnmounted } from "vue";
export default {
  setup() {
    let loading = ref("");
    let i = 0;
    let arr = [".", "..", "...", ".."];
    let timer = setInterval(() => {
      loading.value = arr[i];
      i = ++i % 4;
    }, 350);
    return {
      loading,
    };
    onUnmounted(() => {
      clearInterval(timer);
    });
  },
};
</script>

<style>
</style>