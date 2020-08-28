<template>
  <div class="Watch">
    <span>{{temp}}度</span>&nbsp;
    <span>{{suggest}}</span>
    <!-- {{num}} -->
    <br />
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
let addLog = {
  updated: function () {
    console.log("数据发生变化了，此时温度为" + this.temp);
  },
};
let ext = {
  created() {
    console.log("我是被扩展出来的created");
  },
  methods: {
    add() {
      console.log("我是被扩展出来的方法");
    },
  },
};
export default {
  data() {
    return {
      temp: 25,
      suggest: "穿短袖",
      num: 25,
    };
  },
  mixins: [addLog],
  extends:ext,
  methods: {
    add() {
      this.temp += 5;
      // this.num++;
      // console.log(this.num);
    },
    reduce() {
      this.temp -= 5;
    },
  },
  watch: {
    temp: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal < 0) {
        this.suggest = "穿羽绒服";
      } else if (newVal < 15) {
        this.suggest = "穿夹克";
      } else if (newVal < 35) {
        this.suggest = "穿短袖";
      } else {
        this.suggest = "热到爆炸";
      }
    },
  },
};
</script>

<style>
</style>