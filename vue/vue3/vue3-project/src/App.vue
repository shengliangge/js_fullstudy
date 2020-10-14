<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/home">
          <router-link to="/home">主页</router-link>
        </a-menu-item>
        <a-menu-item key="/plan" to="/plan">
          <router-link to="/plan">计划</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <a-row>
          <a-col :span="6">
            <a-card title="Default size card" style="width: 300px">
              <template v-slot:extra><a href="#">more</a></template>
              <p>计划总时间:{{allTime}}</p>
            </a-card>
          </a-col>
          <a-col :span="16" :offset="2">
            <router-view></router-view>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { reactive, toRefs, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup(props, context) {
    const store = useStore();
    const route = useRoute();
    //入口函数  默认只执行一次  里面没有this，拿不到vue的实例
    const state = reactive({
      allTime: store.getters.allTime,
      // selectedKeys: [],
      selectedKeys: computed(() => {
        return [route.path];
      }),
    });
    // watch(
    //   () => route.path,
    //   (newVal) => {
    //     state.selectedKeys = [newVal];
    //   },
    //   { immediate: true } //immediate 立即执行
    // );
    return {
      ...toRefs(state), //保证数据是响应式的，且内部做了解构
    };
  },
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
