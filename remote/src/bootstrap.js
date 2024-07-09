import Vue from 'vue';

import App from './app.vue'

const vueApp = new Vue({
  render: h => h(App),
})

console.log('remote app');
export default vueApp
