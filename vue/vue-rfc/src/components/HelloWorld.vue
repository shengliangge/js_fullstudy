<template>
  <div>
    <div @touchmove="handMove1" 
    :style="{position: 'absolute', left: x1 + 'px', top: y1 + 'px'}">
      1</div>
    <div @touchmove="handMove2"
    :style="{position: 'absolute', left: x2 + 'px', top: y2 + 'px'}">
    2</div>
    {{ time }}
  </div>
</template>
<script>
import useDrag from '../useDrag';
import useClock from '../useClock';
export default {
  setup() {
    // 逻辑
    const time = useClock();
    const {x: x1, y: y1, handleMove: handMove1} = useDrag();
    const {x: x2, y: y2, handleMove: handMove2} = useDrag();
    return {
      x1, y1, x2, y2, handMove1, handMove2, time
    }
  }
}
</script>
