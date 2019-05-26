<template lang="pug" functional>
  .code-container
    .section-title.column.middle
      h4
        | {{ props.title }}
    code
      | {{ props.code }}
</template>

<style lang="scss" scoped>
@import 'src/scss/variables/colors';

.code-container {
  display: flex;
  flex-direction: column;
}

.section-title {
  background-color: $catskill-white;
  border-radius: 4px;
  height: 40px;
  text-align: center;
  width: 90px;
}
</style>
