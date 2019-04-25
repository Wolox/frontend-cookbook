<template lang="pug">
  .column.sidebar-container.space-between.full-width
    .sidebar-upper-section
      .column.sidebar-header
        h2.sidebar-title.sidebar-title-wolox
          | wolox
        h3.sidebar-title
          | Front End Cookbook
      .column.content-links.start
        button.simple-link.m-bottom-2(
          v-for='(list, index) in componentsList'
          :key='index'
          type='button'
          v-bind:class="{ active: list.isSelected }"
          @click='showNewList(list)'
        )
          | {{ list.title }}
    div.column.center.sidebar-footer-text
      | </> with ♥ by Wolox Front-End Army
      button.sidebar-footer-set-style.m-top-1.row.middle.center.full-width
        i.fas.fa-palette.m-right-1
        | set style
</template>

<script>
import { componentsList } from "../resources/constant";

export default {
  data() {
    return {
      componentsList
    };
  },
  methods: {
    showNewList(list) {
      this.$emit("list", list.component);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/variables/colors';
@import '../scss/variables/sizes';

.sidebar-container {
  background-color: $sidebar-blue;
  height: 100vh;
  max-width: 300px;
  position: sticky;
  top: 0;
}

.sidebar-header {
  padding: 90px 20px 0 30px;
}

.content-links {
  color: $white;
  padding: 0 20px 0 30px;
}

.simple-link {
  color: $science-blue;
  font-size: 16px;
  line-height: 19px;
  position: relative;
  text-transform: uppercase;
  transition: all $transition-duration $transition-function;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &::before {
    background-color: $white;
    content: '';
    height: 100%;
    left: -14px;
    opacity: 0;
    position: absolute;
    transition: opacity $transition-duration $transition-function;
    width: 2px;
  }

  &.active,
  &:hover,
  &:active {
    color: $white;
    font-weight: bold;

    &::before {
      opacity: 1;
    }
  }
}

.sidebar-footer-text {
  color: $white;
  font-size: 14px;
}

.sidebar-title {
  color: $white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 29px;
  margin-bottom: 50px;
  width: 124px;
}

.sidebar-title-wolox {
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 15px;
  margin-bottom: 60px;
  text-transform: uppercase;
  width: auto;
}

.sidebar-footer-set-style {
  background-color: $science-blue;
  color: $white;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 51px;
  letter-spacing: 0.24px;
  text-transform: uppercase;
  transition: all $transition-duration $transition-function;

  &:hover {
    background-color: $white;
    color: $science-blue;
  }
}

</style>
