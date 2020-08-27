<template>
  <div class="about">
    {{title}}
    <User :userName="name" @titleChange="updateTitle"></User>
    <Animal :babyName="baby"></Animal>
  </div>
</template>
<script>
import User from "@/components/User";
import Animal from "@/components/Animal";
export default {
  data() {
    return {
      name: "皮皮虾",
      title: "",
      baby:"",
    };
  },
  components: {
    User,
    Animal,
  },
  methods: {
    updateTitle(baby) {
      console.log(baby);
      this.baby = baby;
    },
  },
};
</script>

<style>
.about {
  color: red;
}
</style>