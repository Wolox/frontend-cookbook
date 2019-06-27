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
