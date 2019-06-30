import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import { loginToGithub } from '../../services/loginService'
import { getAllComponentsByCategory } from '../../services/componentService'
import { getComponentsCode } from '../../utils'

import './index.pug'
import './index.scss'

const urlParams = new URLSearchParams(window.location.search)
const code = urlParams.get('code')

if (code) {
  loginToGithub(code)
}

const vm = new Vue({
  el: '#app',
  data: {
    currentList: '',
    componentsList: [],
    categoryInFeed: ''
  },
  methods: {
    loginToGithub() {
      window.location.href = `http://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
    },
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
