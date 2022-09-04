<template>
  <div>
    <p>{{reversestr}}</p>
    <p>{{reversestr}}</p>
    <p>{{reversestr}}</p>
    <p>{{reverse()}}</p>
    <p>{{reverse()}}</p>
  </div>
</template>



<script>
// 计算属性的优势: 带缓存
// 计算属性对应函数执行后 会将 return 值缓存起来
// 依赖项不变: 多次调用就是从缓存取值
// 依赖项变化 : 函数会重新执行 并重新执行缓存新的值




export default {
  data() {
    return {
      msg: "hello world"
    }
  },
  computed : {
    reversestr(){
      return this.msg.split("").reverse().join("")
    }
  },
  methods: {
    reverse(){
      return this.msg.split("").reverse().join("")
    }
  },

}
</script>

<style>

</style>