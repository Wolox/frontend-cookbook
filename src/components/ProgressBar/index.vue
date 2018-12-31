<template lang="pug">
  #progress-bar
    h2.title Progress bar
    .container-components.progress
      card.item(title='Bar')
        .progress-container.center-loading
          #percent 30%
          .progress-bar
      card.item(title='Circle')
        .radial-progress
          #percentCircle 30%
          .circle
            .mask
</template>

<script>
const Card = () => import("../Card/index");

export default {
  components: {
    Card
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
