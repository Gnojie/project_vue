<template>
  <div>
    <a @click="one" href="http://www.baidu.com">百度</a>
    <hr>
    <a @click="two(10,$event)" href="http://www.taobao.com">淘宝</a>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      
    };
  },
  // 定义函数
  methods:{
    // 事件触发无传值  可以直接获取时间对象
    one(e){
      e.preventDefault();
    },
    // 事件触发有传值传值  需要手动传入$event
    two(num,e){
      e.preventDefault();
    }
  },
};
</script>

<style></style>
