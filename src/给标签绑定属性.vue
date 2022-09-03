<template>
  <div>
    <!-- 值 绑定在标签上 -->
    <!-- v:bind 原生属性名 = 'vue变量' -->
    <a v-bind:href="url">点击去百度</a>
    <!-- :原生属性名 = 'vue变量 -->
    <img :src="imgurl">
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data(){
    return{
      url : 'http://www.baidu.com',
      imgurl : 'https://www.itcast.cn/images/teacher/20211620141625231.jpg'
      }
    }
  }
</script>

<style>

</style>