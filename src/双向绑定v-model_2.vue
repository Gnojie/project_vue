<template>
  <div>
    <span>来自于:</span>
    <!-- 下拉菜单  v-model绑定在select上 -->
    <select v-model="place">
      <!-- value是给后台使用 -->
      <option value="北京市">北京</option>
      <option value="上海市">上海</option>
      <option value="武汉市">武汉</option>
    </select>
    <!-- 遇到复选框 v-model的变量值
   非数组: 关联的是复选框的checked属性
   数组:   关联的是复选框的value属性
    -->
    <div>
      <span>复选框：</span>
      <input type="checkbox" v-model="hobby" value="吃饭" />吃饭
      <input type="checkbox" v-model="hobby" value="睡觉" />睡觉
      <input type="checkbox" v-model="hobby" value="打豆豆" />打豆豆
    </div>
    <div>
      <!-- 给单选框双向绑定radio属性 -->
      <span>性别</span>
      <input type="radio" value="男" name="sex" v-model="gender"/>男 
      <input type="radio" value="女" name="sex" v-model="gender"/>女
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model="introduction"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  // 变量在data函数return对象上
  data() {
    return {
      place: "上海市",
      hobby: [],
      gender:"男",
      introduction: ""
    };
  },
  // 定义函数
  methods: {},
};
</script>

<style></style>
