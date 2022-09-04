<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isall">
    <button>反选</button>
    <ul>
      <li v-for="item in arr" :key="item.name">
        <input type="checkbox" v-model="item.c">
        <span >{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed:{
    isall(){
      // 口诀 查找数组中不符合条件的直接原地返回false
       return this.arr.every(obj => {return obj.c === true})
    }
  }
};
</script>