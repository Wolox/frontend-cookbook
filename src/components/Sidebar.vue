<template lang="pug">
  nav.column.sidebar-container.space-between.full-width(v-bind:class="{ visible: sidebarIsOpen }")
    button.button-container(type="button" @click='toggleSidebar()' v-bind:class="{ active: sidebarIsOpen }")
      span.hamburger(v-bind:class="{ active: sidebarIsOpen }")
    .sidebar-upper-section
      .column.sidebar-header
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
      itemSelected: "",
      categories: [],
      sidebarIsOpen: false
    };
  },
  computed: {
    loginToGithubURL() {
      return `http://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`;
    }
  },
  watch: {
    isUserLoggedIn(nextValue) {
      if (nextValue) this.getCategories();
    }
  },
  created() {
    if (this.isUserLoggedIn) {
      this.getCategories();
    }
  },
  methods: {
    getCategories() {
      getCategories().then(response => {
        this.categories = response;
        const selectedCategory = localStorage.getItem("category");
        this.selectCategory(
          selectedCategory ? { name: selectedCategory } : this.categories[0]
        );
      });
    },
    selectCategory(category, goToFeed = false) {
      this.itemSelected = category.name;
      this.$emit("list", { category: category.name, goToFeed });
    },
    toggleSidebar() {
      this.sidebarIsOpen = !this.sidebarIsOpen;
      console.log(this.sidebarIsOpen);
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
  position: sticky;
  top: 0;
  transition: transform $transition-duration $transition-function;
  width: 300px;
}

.sidebar-header {
  padding: 90px 20px 50px 30px;
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
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 29px;
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

%line {
  background-color: $mine-shaft;
  border-radius: 10px;
  height: 2px;
  left: 0;
  position: absolute;
  width: 100%;
}

.button-container {
  cursor: pointer;
  display: none;
  height: 25px;
  position: absolute;
  right: -50px;
  top: 20px;
  transition: transform $transition-duration $transition-function;
  width: 30px;

  &.active {
    transform: translateX(-70px);
    > .hamburger {
      background-color: $white;

      &::after,
      &::before {
        background-color: $white;
      }
    }
  }

  &:hover {
    > .hamburger {
      background-color: $science-blue;

      &::after,
      &::before {
        background-color: $science-blue;
      }
    }
  }
}

.hamburger {
  @extend %line;

  top: 5px;
  transition: transform 0.28s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &::after,
  &::before {
    @extend %line;

    content: '';
    display: block;
    transition: all $transition-duration $transition-function;
  }

  &::before {
    top: 8px;
    transition: opacity 100ms ease;
  }

  &::after {
    top: 15px;
    transition: transform 0.28s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  &.active {
    transform: translate3d(0, 8px, 0) rotate(135deg);
    transition-delay: 75ms;

    &::before {
      opacity: 0;
    }

    &::after {
      transform: translate3d(0, -15px, 0) rotate(-270deg);
      transition-delay: 75ms;
    }
  }
}

@media screen and (max-width: $medium-screen) {
  .button-container {
    display: initial;
  }

  .sidebar-container {
    position: fixed;
    transform: translateX(-100%);
    z-index: $z-index-sidebar;

    &.visible {
      transform: translateX(0);
    }
  }
}

</style>
