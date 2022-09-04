<template>
  <div id="app">
    <ul>
      <!-- key的作用
      key的值只能是唯一不重复的, 字符串或数值
      v-for不会移动DOM, 而是尝试复用, 就地更新
      新DOM里数据的key存在, 去旧的虚拟DOM结构里找到key标记的标签, 复用标签
      新DOM里数据的key存在, 去旧的虚拟DOM结构里没有找到key标签的标签, 创建
       -->
      <li v-for="item in myArr" :key="item">
        {{ item }}
        <input type="text" />
      </li>
    </ul>
    <button @click="btn_one">插入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArr: ["老大", "老二", "老三"],
    };
  },
  methods: {
    btn_one() {
      this.myArr.splice(1, 0, "新来的");
    },
  },
};
</script>
