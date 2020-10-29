<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <hr>
  <ComDemo />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ComDemo from "./components/com-demo.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    ComDemo,
  },
};
</script>
