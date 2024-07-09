import('./bootstrap.js').then(App=>{
  App.default.$mount('#app')
  console.log(App)
})

// import Vue from 'vue';
/* const Vue = await import('vue');

import App from './app.vue'

new Vue({
  render: h => h(App),
}).$mount('#app') */