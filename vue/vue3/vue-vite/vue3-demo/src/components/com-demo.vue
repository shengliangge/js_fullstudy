<template>
  <!-- fragment   可以让我们少写一个根节点-->
  <ul>
    <FragmentDemo :data="[5, 2, 3, 6, 9]"></FragmentDemo>
    <div id="foot-container"></div>
    <TeleportDemo />
    <Suspense>
      <template #default>
        <AsyncComponent :timeout="3000"></AsyncComponent>
      </template>
      <template #fallback> <Loading /></template>
    </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
import TeleportDemo from "./teleport.vue";
import AsyncComponent from "./suspense.vue";
import Loading from "./loading.vue";
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    Loading
  },
};
</script>

<style>
</style>