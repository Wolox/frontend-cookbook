<template lang="pug">
  .sidebar
    p#sidebar-title
      | Frontend Art
    .sidebar-menus
      p#previous-menu.back-button(onclick='back()') Volver
      #main.tab-list.column
        button.link(@click='change()')
          | Input
        button.link(@click='change()')
          | TextArea
        button.link(@click='change("button-group")')
          | Button
        button.link(@click='change("progress-bar")')
          | Progress Bar
        button.link(@click='change("checkbox-group")')
          | Checkbox
        button.link(@click='change("radio-buttons")')
          | Radio Buttons
        button.link(@click='change()')
          | Select
        button.link(@click='change("spinner")')
          | Spinner
        button.link(@click='change()')
          | Slider
</template>
<script>
export default {
  props: ['change']
}
</script>
<style lang="scss" scoped>
@import "../scss/variables/_colors";

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.link {
  padding: 10px 0 10px 10px;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background: $grey-2;
  }
}
</style>


