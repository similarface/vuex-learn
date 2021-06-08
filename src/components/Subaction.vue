<template>
  <div>
    <h3>访问数据的第二种方式: ```...mapState(['count'])```</h3>
    <h3>Count Value: {{ count }}</h3>
    <button @click='btnHandler1'>-1</button>
    <br>
    <button @click='btnHandler2'>-2</button>
    <br>
    <button @click='subNAsync(20)'>延时-N</button>
    <br>
    <h5>{{ showNum }}</h5>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'Subaction',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subNAsync']),
    btnHandler1() {
      this.sub()
    },
    btnHandler2() {
      this.subN(2)
    },
    btnHandler3() {
      this.subNAsync(100)
    }
  }
}
</script>

<style scoped>

</style>