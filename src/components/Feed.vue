<template lang="pug">
  .feed-content.full-width
    .row.space-between.middle.m-bottom-4
      h2.title
        | {{ title }}
      radioButton(:elements='mainRadioButtons')
    .card-container
      card(v-for='(comp, index) in componentsToShow' :component='comp' :number='index' :key='comp.title')
</template>

<script>
import Card from "./Card";
import RadioButton from "./RadioButton";

import { mainRadioButtons } from "../resources/constant";

export default {
  data() {
    return {
      mainRadioButtons
    };
  },
  props: {
    title: { type: String, required: true },
    componentsToShow: { type: Array, required: true }
  },
  components: { Card, RadioButton }
};
</script>

<style lang="scss">
@import 'variables/colors';

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

.card-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
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
