<template lang="pug">
  .sidebar-container
    .sidebar-upper-section
      .sidebar-header
        h2.sidebar-title.text-big
          | Frontend Cookbook
      .content-links
        button.simple-link.m-bottom-2(
          v-for='(list, index) in componentsList'
          :key='index'
          type='button'
          @click='showNewList(list)'
        )
          | {{ list.title }}
    span.sidebar-footer
      | </> with ♥ by Wolox Front-End Army
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
@import "../scss/variables/colors";
.sidebar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  padding: 90px 20px 10px;
  width: 100%;
  background: $sidebar-blue;
}

.sidebar-header {
  height: 180px;
}

.content-links {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  color: $white;
}

.simple-link {
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: $white;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.sidebar-footer {
  color: $white;
}

.sidebar-title {
  height: 58px;
  width: 124px;
  color: $white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 29px;
}
</style>
