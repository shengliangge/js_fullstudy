<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <MovieSection
      :section="test"
    >
    </MovieSection>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MovieSection from "@/components/MovieSection.vue";
import { ref } from "vue";
export default {
  name: "Header",
  components: {
    "v-header": Header,
    MovieSection,
  },
  setup() {
    const test = ref({
      movies: [
        {
          image:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg",
          title: "金刚川",
          rating: { stars: [1, 1, 1, 0, 0], score: 6.5 },
        },
        {
          image:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg",
          title: "金刚川",
          rating: { stars: [1, 1, 1, 0, 0], score: 6.5 },
        },
        {
          image:
            "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg",
          title: "金刚川",
          rating: { stars: [1, 1, 1, 0, 0], score: 6.5 },
        },
      ],
    });
  return {test}
  },
};
</script>
