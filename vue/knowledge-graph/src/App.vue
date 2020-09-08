<template>
  <div id="app">
    <router-link to="/login">登陆</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped="scoped">
#app {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}
body {
  padding: 0;
  margin: 0;
}
</style>
