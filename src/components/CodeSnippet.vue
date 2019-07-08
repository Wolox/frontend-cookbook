<template lang="pug">
  .code-container
    .section-title.column.middle
      h4
        | {{ title }}
    pre.snippet
      code(v-html='highlightedCode' :class='`language-${lang}`')
</template>

<script>
import Prism from 'prismjs'

Prism.highlightAll()

export default {
  props: {
    title: { type: String, required: true },
    lang: { type: String, required: true },
    code: { type: String, required: true }
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(this.code, Prism.languages[this.lang], this.lang)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'variables/colors';

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

pre {
  background: none;
}

.snippet {
  height: calc(100vh - 180px);
  overflow-y: scroll;
}
</style>

<style lang="scss">
span.token {
  font-size: inherit;
}
</style>
