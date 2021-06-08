<template>
  <div>
    <h3>访问数据的第一种方式: ```$store.state.count```</h3>
    <h3>Count Value: {{ $store.state.count }}</h3>
    <button @click='btnHandler1'>+1</button>
    <br>
    <button @click='btnHandler2'>+2</button>
    <br>
    <button @click='btnHandler3'>延时+1</button>
    <br>
    <button @click='btnHandler4'>延时+N</button>
    <br>
    <h5>getters</h5>
    <h5>{{$store.getters.showNum}}</h5>
    <!--  <button @click='btnHandler3'>+2 +3</button>-->
  </div>
</template>

<script>
export default {
  name: 'Addiaction',
  methods: {
    btnHandler1() {
      this.$store.commit('add')
    },
    btnHandler2() {
      this.$store.commit('addN', 2)
    },
    btnHandler3() {
      this.$store.dispatch('addAsync')
    },
    btnHandler4() {
      this.$store.dispatch('addNAsync',10)
    }
  }
}
</script>

<style scoped>

</style>