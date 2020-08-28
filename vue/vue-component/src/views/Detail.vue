<template>
  <div class="detail">
    <h1>Computed</h1>
    <div class="price">{{totalPrice}}元</div>
    <ul>
      <li v-for="(item,i) in reverseNews" v-bind:key="i">{{item.title}}---{{item.date}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,
      news: [
        { title: "长江口两船碰撞起火事故正在调查中", date: "2020/08/24" },
        { title: "复活麦卡锡主义贻害世界", date: "2020/08/25" },
        { title: '为了特朗普,他可真不怕"打脸"', date: "2020/08/26" },
        { title: "袁隆平爷爷90岁生日前去理发", date: "2020/08/27" },
      ],
    };
  },
  computed: {
    totalPrice: function () {
      return this.num * this.price;
    },
    reverseNews: function () {
      let news = this.news;
      return news.reverse();
    },
  },
};
</script>

<style>
</style>