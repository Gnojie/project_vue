<template>
  <div>
    <div @click="father">
      <!-- .stop可以阻止事件冒泡 -->
      <div @click.stop="one">.stop 阻止事件冒泡</div>
      <!-- .prevent 阻止默认行为 -->
      <a href="http://www.baidu.com" @click.prevent>111</a>
      <p @click.once="two">.once使事件默认执行一次</p>
    </div>
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
    father(){
      console.log("触发点击事件");
    },
    one(){
      console.log("p标签点击了");
    },
    two(){
      console.log("触发事件");
    }
  }
}
</script>

<style></style>
