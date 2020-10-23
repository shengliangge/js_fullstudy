import { onMounted, computed, ref } from 'vue';
// d = new Date()
// onMounted setinterval
// computed
// 返回计算完之后的值
export default function useClock() {
  const d = ref(new Date());
  onMounted(() => {
    setInterval(() => {
      d.value = new Date()
    }, 1000)
  })
  const timeStr = computed(() => {
    const arr = ['星期天', '星期1', '星期2', '星期3', '星期4', '星期5']
    let week = arr[d.value.getDay()];
    return week + d.value.toLocaleTimeString();
  });
  return timeStr;
}
