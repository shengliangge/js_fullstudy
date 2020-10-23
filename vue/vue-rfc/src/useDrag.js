import { ref } from 'vue'
// 很多地方需要拖拽
export default function useDrag() {
  const x = ref(0);   //data  reactive 把某个数据变成data
  const y = ref(0);
  const handleMove = (e) => {
    x.value = e.touches[0].pageX;
    y.value = e.touches[0].pageY
  }
  return {
    x, y, handleMove
  }
}