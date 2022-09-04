<template>
  <div id="app">
    <!-- 动态类名
    :class = "{类名 : 布尔值}"
     -->
    <p :class="{red: bool}">动态类名</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
     bool : true
    };
  },
  methods: {
 
  },
};
</script>
<style scoped>
.red{
  color: red;
}
</style>
