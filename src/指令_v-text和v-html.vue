<template>
  <div>
    <!-- 
      v-html = "vue变量"
      v-text = "vue变量"
      会覆盖插值表达式
     -->
     <p v-text="str"></p>
     <p v-html="str"></p>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      str: "<span>span标签</span>"
    }
  },
  // 定义函数
  methods: {},
};
</script>

<style></style>
