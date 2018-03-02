<template>
    <div>
      {{hello}}
      <button @click="emitMyEvent">emit</button>
    </div>
</template>

<script>
    export default {
        name: "child",
        data () {
          return {
            hello: 'I am component child'
          }
        },

        methods: {
          emitMyEvent () {
            // 第一个参数为要触发的事件，第二个事件为要传递的数据
            this.$emit('my-event', this.hello)
          }
        }
    }
</script>

<style scoped>

</style>
