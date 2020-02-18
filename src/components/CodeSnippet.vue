<template lang="pug">
  pre.snippet
    code(v-html='highlightedCode' :class='`language-${lang}`')
</template>

<script>
import Prism from "prismjs";

Prism.highlightAll();

export default {
  props: {
    lang: { type: String, required: true },
    code: { type: String, required: true }
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(this.code, Prism.languages[this.lang], this.lang);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'variables/colors';

pre {
  background: $catskill-white;
}

.snippet {
  height: 510px;
  overflow-y: auto;
  padding: 15px;
  width: 100%;
}

</style>

<style lang="scss">
span.token {
  font-size: inherit;
}

</style>
