// 源码
import RemoteApp from 'remote-app/RemoteApp';
import Vue from 'vue';
import App from './app.vue'
new Vue({
  render: h => h(App),
}).$mount('#app')
console.log(RemoteApp)
// RemoteApp.$mount('#app');
// 编译后
// __webpack_require__.e(/*! import() */ "webpack_container_remote_remote-app_RemoteApp")
// RemoteApp.$mount('#app');
// import('./utils').then(UTILS => {
//   console.log(UTILS.getRandomInt(1,100))
// })

// 源码

// // 编译后
// __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue")



// Vue.config.productionTip = false
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// console.log(RemoteApp)

// import('remote-app/RemoteApp') // 动态导入微应用的根组件
//   .then((RemoteApp) => {
//     RemoteApp.default.$mount("#app");
//   })
//   .catch((err) => {
//     console.error('Error loading micro frontend:', err);
// });