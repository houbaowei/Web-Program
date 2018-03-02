<template>
  <form action="#">
    <h3>输入框</h3>
    <input type="text" placeholder="你想写点啥?" v-model.lazy="input1">
    <p>{{input1}}</p>

    <br>

    <h3>复选框</h3>
    <p>单个复选框</p>
    <input type="checkbox" v-model="input2">
    <label>{{input2}}</label>

    <p>多个复选框</p>
    <input type="checkbox" name="eat" value="工作" v-model="input3">
    <label for="eat">工作</label>
    <input type="checkbox" name="sleep" value="赚钱" v-model="input3">
    <label for="sleep">赚钱</label>
    <input type="checkbox" name="play" value="养家" v-model="input3">
    <label for="play">养家</label>
    <p>您想要啥?:{{input3}}</p>

    <br>
    <p>单选框</p>
    <input type="radio" name="eat" value="吃饭" v-model="input4">
    <label for="eat">吃饭</label>
    <input type="radio" name="sleep" value="睡觉" v-model="input4">
    <label for="sleep">睡觉</label>
    <input type="radio" name="play" value="打豆豆" v-model="input4">
    <label for="play">打豆豆</label>
    <p>您的爱好为:{{input4}}</p>
    <br>

    <h3>下拉列表</h3>
    <select v-model="selection">
      <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
    </select>
    <p>选择的序号为:{{selection}}</p>
  </form>
</template>

<script>
    export default {
        name: "biao-dan",
        data () {
          return {
            input1: '我是谁?我在哪?我在干嘛?',
            input2: false,
            input3: [],
            input4: '吃饭',
            selection: null,
            selectOption: [
              {
                value: 1,
                text:  'apple'
              },
              {
                value: 2,
                text:  'banana'
              },
              {
                value: 3,
                text:  'orange'
              },
            ]
          }
        }
    }
</script>

<style scoped>

</style>
