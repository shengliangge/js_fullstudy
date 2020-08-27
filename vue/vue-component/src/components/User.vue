<template>
  <div class="user">
    {{userName}}
    <button @click="handle">改变baby</button>
  </div>
</template>

<script>
export default {
  props: ["userName"],
  data() {
    return {
      name: "皮皮",
      title: "小黑",
    };
  },
  methods: {
    handle() {
      console.log("ok");
      this.$emit('titleChange',this.title);
    },
  },
};
</script>

<style>
</style>