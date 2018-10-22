
Vue.component('massia',{
  template:
  `
    <div>
      <maya @maya-massia = "m_m"></maya>
      <div v-if="maya_massia">
        您的余额为103.00元
      </div>
    </div>
            `,
      //里层div必须和maya标签在一个域中，maya-massia方法在这里被调用
  methods: {
    m_m: function (ab,c,d,e) {
      this.maya_massia = !this.maya_massia
      console.log('ab',ab)
      console.log('c',c)
      console.log('d',d)
      console.log('e',e)
    }
  },
  data: function() {
    return {
      maya_massia: false,
    }
  },
})

Vue.component('maya',{
  template: `<button @click = "on_click()">显示余额</button>`,
  methods: {
    on_click() {
      this.$emit('maya-massia',{a: 1,b: 2},{c: 3},{d: 4},{e :5})
      //maya-massia是在这定义的一个方法，$emit是自定义方法的关键字
      // 子组件向 父组件通信 是利用 自定义事件之间的逻辑沟通
    }
  }
})

new Vue({
  el: '#app3',
})
