<template>
  <div class="left-container">
    <h3 >Left 组件 --- {{ count }}</h3>

    <hr >
    <button @click="count++">+1</button>
    <button @click="resetCount">重置</button>
    <hr>


  </div>

  
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    resetCount() {
      this.count = 0
    }
  },
  created() {
  }
}
</script>

<style lang="less" scoped >
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
  
}
// 这是CSS选择器的写法，用于选择具有特定属性的HTML元素。


</style>
