<template lang="pug">
div
  div.theming-section.column.m-bottom-4
    h3.theming-title.m-bottom-2 Primary color
    input(type='color' v-model='mainColor')
  div.theming-section.column.m-bottom-4
    h3.theming-title.m-bottom-2 Geneated palettes
    div(v-for='palette in palettes')
      span(v-for='color in palette' :style='{ backgroundColor: color, padding: "10px" }')
        | {{ color }}
</template>

<script>
import { setThemeColor, getCurrentPalette } from '../config/theme'

export default {
  data() {
    return {
      mainColor: '#002363',
      palettes: {},
    }
  },
  watch: {
    mainColor () {
      setThemeColor(this.mainColor)
      this.palettes = getCurrentPalette()
    }
  },
  created () {
    setThemeColor(this.mainColor)
    this.palettes = getCurrentPalette()
  }
}
</script>

<style lang="scss" scoped>
@import 'variables/colors';

.theming-section {
  padding: 0 30px 20px;
}

.theming-title {
  color: $white;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
}
</style>