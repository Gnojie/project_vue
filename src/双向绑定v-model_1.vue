<template>
  <div>
   <span>用户名:</span>
   <!-- v-model  暂时只能用在表单标签中
   双向的数据绑定  表单的value属性 和 vue变量绑定
    -->
    <!-- v-model="变量名" -->
    <!-- 作用:实现表单的value属性 和 vue变量  的双向绑定-->
   <input type="text" v-model="username">
   <input type="password" v-model="password">
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
     username: "",
     password: ""
    }
  },
  // 定义函数
  methods:{
   
  }
}
</script>

<style></style>
