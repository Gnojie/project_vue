<template>
  <div>
    <div>
      <span>年龄</span>
      <!-- .numberx修饰符  将输入转化为数值类型该绑定给v-model  -->
      <input type="number" v-model.number="age">
    </div>
    <div>
      <span>格言</span>
      <!-- .trim 去除两边空格 -->
      <input type="text" v-model.trim="txt">
    </div>
    <div>
      <span>简介</span>
      <!-- .lazy修饰符  失去焦点内容改变时与 v-model双向绑定 -->
      <textarea v-model.lazy="introduction"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      age: "",
      txt: "",
      introduction: ""
    }
  },
  // 定义函数
  methods: {},
};
</script>

<style></style>
