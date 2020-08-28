<template>
  <div class="methods">
    <P>{{count}}</P>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add(e) {
      this.count++;
      console.log(e);
      
    },
  },
};
</script>

<style>
</style>