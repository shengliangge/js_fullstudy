<template>
  <h1>{{ state.count }}* 2={{ double }}</h1>
  <h2>{{ num }}</h2>
  <button @click="add">累加</button>
</template>

<script>
import { reactive, computed, ref, onMounted } from "vue"; //提高treeShaking
export default {
  setup() {
    //hook函数
    const { state, double } = useCounter(1);
    // const state = reactive({
    //   count: 1,
    // });
    const num = ref(2); //ref解决简单的数据，接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value。
    function add() {
      console.log(num);
      state.count++;
      num.value++;
    }
    // const double = computed(() => state.count * 2);
    onMounted(() => {
      console.log("mounted");
    });
    return { state, add, double, num };
  },
};
function useCounter(count, n) {
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return { state, double };
}
</script>

<style>
</style>