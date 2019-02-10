<template lang="pug">
  .card
    h4.card-title
      | {{ component.title }}
    div(v-html='component.html')
</template>

<script>
export default {
  props: {
    component: { type: Object, required: true }
  }
}
</script>

<style lang="scss">
@import 'src/scss/variables/colors';
@import 'src/scss/variables/sizes';

.card {
  background-color: $white;
  border-radius: 5px;
  box-shadow: 0 0 0 rgba($black, 0), 0 0 0 1px rgba($black, 0.1);
  cursor: pointer;
  height: $card-height;
  margin: 14px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  transition: box-shadow $transition-duration $transition-function;
  width: $card-width;

  &:hover {
    box-shadow: 0 6px 10px rgba($black, 0.2);

    .card-title {
      transform: translateY(-125%);
    }
  }
}

.card-title {
  background-color: lighten($gray, 26%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 -1px 0 rgba($black, 0.15);
  color: $black;
  font-weight: bold;
  padding: 14px;
  position: absolute;
  text-align: center;
  top: 105%;
  transition: transform $transition-duration $transition-function;
  width: 100%;
}

</style>
