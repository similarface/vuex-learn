<template>
  <div>
    <h1>father</h1>
    <p>父组件向子组件进行传值</p>
    <p>props 单向数据流</p>
    <p>props 驼峰形式 模版中需要使用短横线形式</p>
    <p>props属性值</p>
    <my-son title='title=good'></my-son>
    <my-son :title='ptitle' content='hello' good-name='TTT'></my-son>
    <p>prop： string</p>
    <my-son title='title=good'></my-son>
    <p>prop： numner</p>
    <my-son :title='pnum'></my-son>
    <p>prop： boolean</p>
    <my-son :title='true'></my-son>
    <p>prop： array</p>
    <my-son :title='parr'></my-son>
    <p>prop： obj</p>
    <my-son :title='pobj'></my-son>
    <h3>子向父传递</h3>
    <p>prop： array</p>
    <div :style='{fontSize: fontSize+"px"}'>OOO</div>
    <my-son :parr='parr' @enlarge-text='handle'>xxx</my-son>
  </div>
</template>

<script>
import son from './son'

export default {
  name: 'father',
  components: { 'my-son': son },
  data: function() {
    return {
      ptitle: '7788',
      pnum: 10,
      parr: ['A', 'B'],
      fontSize: 10,
      pobj: { name: 'lisi', age: 12 }
    }
  },
  methods:{
    handle: function(){
      this.fontSize += 5
    }
  }
}
</script>

<style scoped>

</style>