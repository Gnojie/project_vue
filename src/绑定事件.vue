<template>
  <div>
    <button v-on:click="count++">+</button>
    <p>{{ count }}</p>
    <button v-on:click="reduce">-</button>
    <button v-on:click="add(5)">+</button>
    <!-- 绑定事件 
    v-on:事件名=少量代码
    v-on:事件名="methods里的函数名"
    v-on:事件名="methods里的函数名(实参)"
    简写 将v-on:替换为@
     -->
     <button @click="count +=2">+ </button>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      count: 1,
    };
  },
  // 定义函数
  methods:{
    reduce(){
      // this指向export default的对象
      // data函数会将对象挂载到当前组件对象上
      this.count --
    },
    add(num) {
      this.count += num
    }
  },
};
</script>

<style></style>
