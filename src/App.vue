<template>
  <div>
    <my-addtion></my-addtion>
    <div>-----------------></div>
    <my-subaction></my-subaction>
    <div>
      <hr>
      <my-father></my-father>
    </div>
  </div>
</template>

<script>
import Addiaction from '@/components/Addiaction'
import Subaction from '@/components/Subaction'
import father from '@/components/father'

export default {
  components: {
    'my-addtion': Addiaction,
    'my-subaction': Subaction,
    'my-father': father
  },
  data() {
    return {}
  }
}
</script>