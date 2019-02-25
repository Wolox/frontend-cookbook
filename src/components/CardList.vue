<template lang="pug">
  .components-feed
    card(v-for='(comp, index) in spinners' :component='comp' :number='index' :key='index')
</template>

<script>
import Card from './Card'

import spinners from '../resources/spinners'

export default {
  data() {
    return {
      spinners
    }
  },
  props: {
    toShow: { type: String, required: true }
  },
  components: { Card }
}
</script>

<style lang="scss">
@import 'src/scss/variables/colors';
@import 'src/scss/components/spinners';

.components-feed {
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100vh;
}
</style>
