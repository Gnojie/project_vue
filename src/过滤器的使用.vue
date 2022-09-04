<template>
  <div>
    <p>原来的样子:{{msg}}</p>
    <!-- 想要翻转字符串---过滤器 -->
    <!-- 过滤器使用:
    值 | 过滤器名字
     -->
     <!-- 多个过滤器的使用
      用 |分割多个过滤器 -->
    <p>使用翻转过滤器:{{msg | reverse("|") | up}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "hello,world"
    }
  },
  // 局部过滤器
  // 语法 过滤器名字:(val)=>{return 处理后的值}
  // 过滤器接收参数:(val,s)=>{return 处理后的值}
  filters:{
    reverse:(val,s)=>{
      return val.split("").reverse().join(s)
    },
    up:(val)=>{
      return val.toUpperCase()
    }
  }

}
</script>

<style>

</style>