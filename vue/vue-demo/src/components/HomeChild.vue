<template>
  <div class="home">
    <p>首页的子组件</p>
    <hr/>
    <h3>{{count}}{{abc}}</h3>
    <p>{{a}}{{aaa}}</p>
    <div class="btn">
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello world',
      a: 1
    }
  },
  store,
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['abc']),
    aaa() {
      let aa = this.a + 1
      return aa
    }
  },
  // methods: {
  //   add() {
  //     // this.$store.state.count++
  //     this.$store.commit('add', 10)
  //   },
  //   reduce() {
  //     // this.$store.state.count--
  //     this.$store.commit('reduce')

  //   }
  // }
  // methods: mapMutations([
  //   'add', 'reduce'
  // ])
  methods: {
    ...mapMutations(['add', 'reduce'])
  }
}
</script>

<style>

</style>