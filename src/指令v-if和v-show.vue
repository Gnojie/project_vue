<template>
  <div>
    <!-- 
      v-show = "vue变量"
      v-if = "vue变量"
     -->
      <h1 v-show="show">1111</h1>
      <h1 v-if="show">222</h1>
      <!-- 
        v-show  采用  display = "none" //频繁切换
        v-if    从dom树直接移除        // 移除
       -->
       <h1 v-if="age > 18"></h1>
       <h1 v-else>未成年</h1>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
    show : false,
    age : 5
    }
  },
  // 定义函数
  methods: {},
};
</script>

<style></style>
