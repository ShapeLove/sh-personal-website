<template>
  <div id="app">
    {{test}}1111111
    <div class="test">
      {{test}}
      <router-link to="about">测试路由</router-link>
    </div>
    <home-vue></home-vue>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import HomeVue from './views/Home.vue';

export default Vue.extend({
  components: {
    HomeVue,
  },
  data() {
    return {
      test: 'ceshi test',
    };
  },
  methods: {
    test(): void {
      window.console.log('ceshi');
    },
  },
});
</script>>

<style scoped lang="scss">
@import '@/assets/scss/_color.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .test{
    color:$-color-error;
  }
}
</style>
