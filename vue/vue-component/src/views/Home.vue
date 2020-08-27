<template>
  <div class="home">
    <User :userName="name"></User>
  </div>
</template>
<script>
import User from "@/components/User";
export default {
  name: "Home",
  data(){
    return{
      name:'聪哥'
    }
  },
  components: {
    User,
  },
};
</script>
