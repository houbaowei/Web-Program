<template>
  <!-- 定义组件 MyComponent -->
    <div class="myComponent">
      <slot name="mySlot"></slot>
    </div>
</template>

<script>
    export default {
        name: "my-component"
    }
</script>

<style scoped>

</style>
