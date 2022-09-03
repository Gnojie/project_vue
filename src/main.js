import Vue from 'vue' //引入vue对象
import App from './App.vue' //引入APP.vue文件对象引入过来(vue项目页面入口)

Vue.config.productionTip = false  //无实际作用  在控制台有一个消息

new Vue({  //开始实例化Vue
  render: h => h(App), //render函数  用于渲染app页面
}).$mount('#app')  //渲染到index.html中 id叫app的标签上
