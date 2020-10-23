import { defineComponent } from 'vue';

export default function (Com) {
  console.log(Com)
  // 第二个参数 script 中间那一段
  return defineComponent({
    // render 返回就是 该组件需要渲染的
    render() {
      // return <h3>hhhh</h3>
      return <div @touchMo9>{h(Com)}</div>
    }
  })
}