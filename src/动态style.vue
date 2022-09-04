<template>
  <div id="app">
    <!-- 动态类名
    :class = "{css属性名 : 值}"
     -->
    <p :style="{color: color}">动态类名</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
     color : "blue"
    };
  },
  methods: {
 
  },
};
</script>
<style scoped>

</style>
