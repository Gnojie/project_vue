<template>
  <div id="app">
    <ul>
      <li v-for="item in myArr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArr: ["帅哥", "美女", "程序猿"],
    };
  },
  methods: {
    btn() {
      // reverse方法可以使得 v-for更新
      // this.myArr = this.myArr.reverse()
      // slice方法不会造成 v-for的更新

      this.myArr = this.myArr.slice(2)
    },
  },
};
</script>