<template lang="pug">
  .container
    div(v-for='(list, index) in elements')
      input(:id='list.id' type="radio" :name='list.name')
      label(:for='list.id') {{ list.text }}
</template>

<script>
export default {
  props: {
    elements: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import 'src/scss/variables/colors';
@import 'src/scss/variables/sizes';

.container {
  background-color: $catskill-white;
  border-radius: 4px;
  padding: 6px 7px;

  input {
    display: none;

    &:checked ~ label {
      background-color: $white;
      font-weight: bold;
    }
  }

  label {
    border-radius: 3px;
    color: $limed-spruce;
    cursor: pointer;
    font-size: $text-small;
    line-height: 16px;
    padding: 10px 16px;
    transition: background-color $transition-duration $transition-function;

    &:hover {
      font-weight: bold;
    }
  }
}

</style>
