<template lang="pug">
  .feed-content.full-width
    h2.title.m-bottom-6
      | {{ title }}
    .card-container
      card(
        v-for='(comp, index) in componentsToShow'
        :key='comp.title'
        :component='comp'
        :category='title'
        :number='index'
        :disabled='!isUserLoggedIn'
      )
    p.mocked-note.m-top-4(v-if='!isUserLoggedIn')
      | This components are examples, please log in with your Github account to see all the components.
</template>

<script>
import Card from "./Card";
import RadioButton from "./RadioButton";

export default {
  props: {
    title: { type: String, required: true },
    componentsToShow: { type: Array, required: true },
    isUserLoggedIn: { type: Boolean, required: true }
  },
  components: { Card, RadioButton }
};
</script>

<style lang="scss" scoped>
@import "variables/colors";
@import "variables/sizes";

.feed-content {
  margin: 0 auto;
  max-width: $content-max-width;
  padding: 80px 20px 20px 80px;
}

.card-container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
}

.mocked-note {
  border: 1px solid $red;
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: $big-screen) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1024px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: $small-screen) {
  .feed-content {
    padding: 70px 20px 20px;
  }

  .card-container {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .title {
    display: block;
    text-align: center;
  }
}
</style>
