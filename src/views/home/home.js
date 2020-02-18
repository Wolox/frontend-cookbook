import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import {
  loginToGithub,
  userIsLoggedIn
} from '../../services/loginService'
import {
  getAllComponentsByCategory,
  loadMockedComponents
} from '../../services/componentService'
import {
  getComponentsCode
} from '../../utils'

import './home.pug'
import './home.scss'

const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')

const vm = new Vue({
  el: '#app',
  data: {
    currentList: '',
    componentsList: [],
    categoryInFeed: '',
    isUserLoggedIn: false
  },
  created() {
    if (process.env.NODE_ENV !== 'production') this.isUserLoggedIn = true
    else this.getFeedComponents()
  },
  methods: {
    changeCurrentList({
      category
    }) {
      const categoryToShow = category ? category : localStorage.getItem('category')
      getAllComponentsByCategory(categoryToShow).then(response => {
        localStorage.setItem('category', categoryToShow)
        this.currentList = categoryToShow
        this.componentsList = getComponentsCode(response)
        this.categoryInFeed = categoryToShow
      })
    },
    getComponentHTML(component) {
      return this.componentsHTML[component]
    },
    getFeedComponents() {
      if (userIsLoggedIn()) {
        this.isUserLoggedIn = true
      } else if (code) {
        loginToGithub(code).then(() => this.isUserLoggedIn = true)
      } else {
        loadMockedComponents().then(components => {
          this.currentList = 'spinners'
          this.componentsList = components.default
          this.categoryInFeed = 'spinners'
        })
      }
    }
  },
  components: {
    Feed,
    Sidebar
  }
})