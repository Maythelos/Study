// 全局组件
// Vue.component('maytehlso',{
//   template: '<button @click = "on_click">touch me!</button>',
//   methods: {
//     on_click: function () {
//       alert('maythelos!')
//     }
//   }
// });
//
// new Vue({
//   el: '#app1'
// })

// 局部组件
new Vue({
  el: '#app1',
  components: {
    'maythelos': {
      template: '<button @click = "on_click">touch me!</button>',
      methods: {
        on_click: function () {
          alert('maythelos!')
        }
      }
    }
  }
})
