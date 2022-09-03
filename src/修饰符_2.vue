<template>
  <div>
    <!-- 绑定键盘监听事件  .enter只有在按下回车才会执行 -->
    <input type="text" @keydown.enter="one">
    <!-- .esc修饰符  取消键  -->
    <input type="text" @keydown.esc="two">
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
    }
  },
  // 定义函数
  methods:{
    one(){
      console.log("用户按下了回车")
    },
    two(){
      console.log("用户按下了esc")
    }
  }
}
</script>

<style></style>
