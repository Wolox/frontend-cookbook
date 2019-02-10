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
    .sidebar-footer
      span
        | </> with ♥ by Wolox Front-End Army
</template>

<script>
import { componentsList } from '../resources/constant'

export default {
  data() {
    return {
      componentsList
    }
  },
  methods: {
    showNewList(list) {
      this.$emit('list', list.component)
    }
  }
}
</script>


<style lang="scss" scoped>

.sidebar-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 300px;
  padding: 90px 60px 0; 
  width: 100%;
}

.sidebar-header {
  height: 180px;
}

.content-links {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.simple-link {
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>
