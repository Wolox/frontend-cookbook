<template lang="pug">
  .feed-content.full-width
    .row.space-between.middle.m-bottom-4
      h2.title
        | {{ title }}
      radio-button(:elements='mainRadioButtons')
    .card-container
      card(
        v-for='(comp, index) in componentsToShow'
        :key='comp.title'
        :component='comp'
        :category='title'
        :number='index'
      )
</template>

<script>
import Card from './Card'
import RadioButton from './RadioButton'

import { mainRadioButtons } from '../resources/constant'

export default {
  data() {
    return {
      mainRadioButtons
    }
  },
  props: {
    title: { type: String, required: true },
    componentsToShow: { type: Array, required: true }
  },
  components: { Card, RadioButton }
}
</script>

<style lang="scss">
@import 'variables/colors';
@import 'variables/sizes';

.feed-content {
  margin: 0 auto;
  max-width: $content-max-width;
  padding: 80px 20px 20px 80px;
}

.card-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 991px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 550px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>
