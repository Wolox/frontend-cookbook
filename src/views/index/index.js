import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import { getAllComponentsByCategory } from '../../services/componentService'
import { getComponentsCode } from '../../utils'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    currentList: '',
    componentsList: [],
    categoryInFeed: ''
  },
  methods: {
    loginToGithub() {
      window.location.href = `http://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&allow_signup=true&redirect_uri=http://localhost:3000/`
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
