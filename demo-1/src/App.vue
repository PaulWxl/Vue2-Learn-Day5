<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件 </h1>
    <!-- <p ref="myp">p标签</p> -->
    <button @click="showThis">打印 this</button>
    
    <!-- 这里 不能 直接 使用 this.$refs ，还是 得 单独 定义 一个 方法 -->
    <button @click="onReset">重置子组件中的count</button>
    
    <hr>

    <!-- 自动 获取 焦点， 绑定 一个ref， 然后 使用 原生 DOM 对象 的 .focus() 方法。  -->
    <input style="margin-bottom: 5vh;" type="text" name="" id="" v-if="iptVisible == true" ref="iptRef" @blur="showBtn" >
    <button style="margin-bottom: 5vh;" @click="showIpt" v-else>显示输入框</button>
    
    <div class="box">
      <!-- 在 点 这个 按钮 的  时候， 只要 能够 拿到 Left 组件 的 这个 实例， 就可以 使用 Left 组件 里面 的 数据 和 方法 : ref 加 给 组件 ， 希望 拿到 哪个 组件 的 实例 ， 就给 哪个 组件 加一个 ref:   <Left ref="comLeft"></Left>  -->
      <!-- 给 Left 绑定 ref 后 定义一个 名称 :  com 表示 component 组件， comLeft 表示 Left 组件  -->
      <Left ref="comLeft"></Left>
    </div>
    
  </div>
</template>

<script>

// 导入 子组件 
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'


export default {

    // 注册 子组件 
    components: {
        Left,
        Right
    },
    data() {
       return {
        // 结合 v-if 设置一个 布尔值 
        // 初始化 为  false， 表示 默认 隐藏 文本框 ， 显示 按钮 
        iptVisible: false
       }
    },
    methods: {
      showThis() {
        // this 是 App.vue 组件 的 实例， this.$refs 默认 指向 空对象
        console.log(this),
        // console.log(this.$refs.myh1)// 能拿到 对应 的 标签
        // 操作DOM元素， 把 文本颜色改为 红色
        this.$refs.myh1.style.color = 'red'
        this.$refs.myp.style.color = 'pink'
      },
      // 重置 Left组件 中的 count 为 0
      onReset() {
        // 既可以 直接 更改 count， 也可以 直接 使用 resetCount方法
        this.$refs.comLeft.count = 0
        // this.$refs.comLeft.resetCount()
      },
      showIpt() {
        this.iptVisible = true// 这一行代码 执行完 之后， 需要 一定 的 时间 更新 页面 中 的 DOM 元素， 再快 也要 更新时间。 所以  console.log(this.$refs.iptRef) 是 undefined。 需要 让 console.log(this.$refs.iptRef) 往后 延迟 一下。 处理方法: 使用this.$nextTick(cb回调函数)方法
        // console.log(this.$refs.iptRef)// undefined 
        // this.$refs.iptRef.focus()
      


        // 延迟执行， 等待页面重新渲染完毕之后， 再执行 this.$refs.iptRef.focus() , 使用 this.$nextTick方法， 作为 回调函数。 
        this.$nextTick( () => {
          this.$refs.iptRef.focus()
          // console.log(this)
        } )
        


      },
      // 文本 失去 焦点 时，  展示 按钮
      showBtn() { 
        this.iptVisible = false

      },

      // 实验： 为啥 在 updated 里面 不行 --- iptVisible 的 值 会变换， updated 函数 又会被触发， 等到ipt隐藏时， 页面中 没有 ipt 元素了， 那么.focus() 就会报错。--所以不能在updated中写 this.$rerfs.iptRef.focus()
      // updated() {
      //   this.$refs.iptRef.focus()
      // },
    }

}
</script>

<style lang="less" >
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
