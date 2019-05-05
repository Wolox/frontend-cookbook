<template lang="pug">
  .feed-content.full-width
    h2.title.m-bottom-4
      | {{ title }}
    .row.wrap
      card(v-for='(comp, index) in componentsToShow' :component='comp' :number='index' :key='comp.title')
</template>

<script>
import Card from './Card';

export default {
  props: {
    title: { type: String, required: true },
    componentsToShow: { type: Array, required: true }
  },
  components: { Card }
}
</script>

<style lang="scss">
@import "variables/colors";

// TODO: refine the code in the components
@import 'components/spinners';
@import 'components/input';
@import 'components/checkboxes';
@import 'components/progressBars';
@import 'components/radioButtons';
@import 'components/buttons/buttons';
@import 'components/buttons/btn-1';
@import 'components/buttons/btn-2';
@import 'components/buttons/btn-3';
@import 'components/buttons/btn-4';
@import 'components/buttons/btn-5';

.feed-content {
  margin: 0 auto;
  max-width: 1080px;
  padding: 80px 20px 20px 80px;
}
</style>
