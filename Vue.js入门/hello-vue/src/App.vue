<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->
    <users></users>
    <hr>


    <!--自定义事件, 子组件向父组件通信-->
    <child @my-event="onEmitMyEvent"></child>

    <biao-dan></biao-dan>

    <hr>
    <prop message="hello!!!!"></prop>

    <br>
    <p>动态prop</p>
    <input type="text" v-model="parentMsg">
    <prop v-bind:message="parentMsg"></prop>

    <!-- slot使用方法 -->
    <my-component>
      <p slot="mySlot">我就是slot的替代内容, 这里可以放任何标签元素. 即使是一长串ul>li列表,但是我是一个有名字的宝宝,所以你必须给我加上 slot="mySlot", 不然我就报错给你看</p>
    </my-component>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Users from './components/Users.vue'
import Child from './components/ZiDingYiShiJian'
import BiaoDan from './components/BiaoDan'
import Prop from './components/props'
import MyComponent from './components/MyComponent'

export default {
  name: 'app',
  components: {
    Hello,
    Users,
    Child,
    BiaoDan,
    Prop,
    MyComponent
  },

  data() {
    return {
      parentMsg: 'Hello Mr DJ!'
    }
  },

  methods: {
    onEmitMyEvent (paramA) {
      console.log(paramA);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
