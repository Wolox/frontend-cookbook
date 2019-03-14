<template lang="pug">
  .feed-content
    h2.title.m-bottom-4
      | {{ title }}
    .components-feed
      card(
        v-for='(comp, index) in componentsToShow'
        :component='comp'
        :number='index'
        :key='index'
      )
</template>

<script>
import Card from './Card'

export default {
  props: {
    title: { type: String, required: true },
    componentsToShow: { type: Array, required: true }
  },
  components: { Card }
}
</script>

<style lang="scss">
@import 'src/scss/variables/colors';
@import 'src/scss/components/spinners';
@import 'src/scss/components/input';

.components-feed {
  display: flex;
  flex-wrap: wrap;
}
</style>
