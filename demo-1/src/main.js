import Vue from 'vue'
import App from './App.vue'
// 导入 需要 全局注册 的 组件 
// import 统一 放在 最上面 


// 使用Vue.component(), 定义 全局组件 
// 参数1： 字符串格式， 表示组件的“注册名称” ， 这个名字， 就是 template 中 的 标签名。 
// 参数2： 需要被全局注册的那个组件 


Vue.config.productionTip = false


// 这个 new Vue({}) 必须 放在 最底下， 否则 无效。
new Vue({
  render: h => h(App),
}).$mount('#app')

