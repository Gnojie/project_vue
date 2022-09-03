<template>
  <div>
    <!-- 
      v-for = "(值变量名,索引变量名) in 目标结构 "
      口诀:想要谁循环就放在谁身上
     -->
     <ul>
      <li v-for="(item,index) in arr" :key="index">{{ item }}</li>
     </ul>
     <!-- 
      v-for = "值变量名 in 目标结构"
      -->
     <ul v-for="item in stuArr" :key="item">
      <li>{{ item.id }}</li>
      <li>{{ item.name }}</li>
      <li>{{ item.sex }}</li>
      <li>{{ item.hobby }}</li>
     </ul>
     <!-- 
      v-for = "(value,key) in 对象 "
     -->
     <div>
      <p v-for="(value,key) in tObj" :key="value">
        <span>{{ value }}</span> <span>{{ key }}</span>
      </p>
     </div>
     <!-- 
      v-for = "n in 固定数字 "
      从1开始遍历
     -->
     <div>
      <p v-for="n in count" :key="n">{{n}}</p>
     </div>
  </div>
</template>

<script>
export default {
  data(){
     return{
       arr: ["小明", "小欢欢", "大黄"],
       stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
       tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 100
     }
    
  }

}
</script>

<style>

</style>