<template>
  <div>
    <my-addtion></my-addtion>
    <div>-----------------></div>
    <my-subaction></my-subaction>
  </div>
</template>

<script>
import Addiaction from '@/components/Addiaction'
import Subaction from '@/components/Subaction'

export default {
  components: { 'my-addtion': Addiaction, 'my-subaction': Subaction },
  data() {
    return {}
  }
}
</script>