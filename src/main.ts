import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/_color.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');
