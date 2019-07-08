<template lang="pug">
  nav.column.sidebar-container.space-between.full-width
    .sidebar-upper-section
      .column.sidebar-header
        h2.sidebar-title.sidebar-title-wolox
          | wolox
        a.sidebar-title(href='/')
          | Front End Cookbook
        github-login-button(v-if='!isUserLoggedIn' :url='loginToGithubURL')
      .column.content-links.start
        button.simple-link.m-bottom-2(
          v-for='(category, index) in categories'
          :key='index'
          type='button'
          v-bind:class="{ active: category.name == itemSelected }"
          @click='selectCategory(category, true)'
        )
          | {{ category.name }}
    .column.center.sidebar-footer-text
      | </> with ♥ by Wolox Front-End Army
      button.sidebar-footer-set-style.m-top-1.row.middle.center.full-width
        i.fas.fa-palette.m-right-1
        | set style
</template>

<script>
import GithubLoginButton from './GithubLoginButton'

import { getCategories } from '../services/componentService'

export default {
  props: {
    isUserLoggedIn: { type: Boolean, required: true }
  },
  components: { GithubLoginButton },
  data() {
    return {
      itemSelected: '',
      categories: []
    }
  },
  computed: {
    loginToGithubURL() {
      return `http://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
    }
  },
  watch: {
    isUserLoggedIn(nextValue) {
      if (nextValue) this.getCategories()
    }
  },
  created() {
    if (this.isUserLoggedIn) {
      this.getCategories()
    }
  },
  methods: {
    getCategories() {
      getCategories().then(response => {
        this.categories = response
        const selectedCategory = localStorage.getItem('category')
        this.selectCategory(selectedCategory ? { name: selectedCategory} : this.categories[0])
      })
    },
    selectCategory(category, goToFeed = false) {
      this.itemSelected = category.name
      this.$emit('list', { category: category.name, goToFeed })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'variables/colors';
@import 'variables/sizes';

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
