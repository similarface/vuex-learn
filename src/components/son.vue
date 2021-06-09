<template>
  <div>
    <h3>Son</h3>
    <h5>父组件传过来的值: {{ title }} ==> content: {{ content }} {{ goodName }} parr: {{ parr }}</h5>
    <p>子组件向父组件传递值 定义：$emit 父组件定义@($emit) = func</p>
    <button @click='$emit("enlarge-text")'>扩大字体</button>
  </div>
</template>

<script>
export default {
  name: 'son',
  props: ['title', 'content', 'goodName', 'parr']
}
</script>

<style scoped>

</style>