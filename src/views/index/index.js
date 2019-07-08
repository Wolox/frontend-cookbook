import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import { loginToGithub, userIsLoggedIn, getUserInfo } from '../../services/loginService'
import { getAllComponentsByCategory, loadMockedComponents } from '../../services/componentService'
import { getComponentsCode } from '../../utils'

import './index.pug'
import './index.scss'

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
  },
  methods: {
    changeCurrentList({ category }) {
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
    }
  },
  components: { Feed, Sidebar }
})
