<template>
<!-- 翻转世界 -->
  <div>
   <p>{{msg}}</p>
   <button @click="divert">逆转世界</button>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      msg : "hello,world"
    }
  },
  // 定义函数
  methods:{
    divert(){
      let arr = this.msg.split("")
      let newarr = arr.reverse()
      this.msg = newarr.join("")
    }
  }
}
</script>

<style></style>
