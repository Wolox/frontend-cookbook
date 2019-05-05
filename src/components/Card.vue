<template lang="pug">
  .card.column.middle.center.full-width(:style='cardColor')
    .card-content.full-width.row.middle.center(v-html='component.html')
    .card-info.column.full-width
      h4.card-title.m-bottom-1
        | {{ component.title }} 
      span.author
        | {{ component.author }}
</template>

<script>
export default {
  props: {
    component: { type: Object, required: true },
    number: { type: Number, required: true }
  },
  computed: {
    cardColor() {
      const colors = [ '#D25401', '#2A3E50', '#17BC9B', '#2880B9', '#FECB65', '#AA48EE', '#FF7293', '#CDD2D2' ]
      return {
        "--card-color": colors[Math.floor(this.number % colors.length)]
      };
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables/colors';
@import 'src/scss/variables/sizes';
$card-info-content: 70px;

.card {
  background-color: var(--card-color);
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba($black, 0.3);
  cursor: pointer;
  height: $card-height;
  max-width: $card-width;
  transition: box-shadow $transition-duration $transition-function;

  &:hover {
    box-shadow: 2px 2px 5px rgba($black, 0.3);
  }
}

.card-content {
  height: calc(100% - #{$card-info-content});
  position: relative;
}

.card-info {
  background-color: $white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: $card-info-content;
  padding: 16px;
}

.card-title {
  color: $black;
  font-size: 18px;
  font-weight: bold;
}

.author {
  font-size: 14px;
}

</style>
