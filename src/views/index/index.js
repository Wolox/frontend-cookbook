import Vue from 'vue'
import 'regenerator-runtime/runtime'

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
    componentTitle: ''
  },
  methods: {
    changeCurrentList(newList) {
      getAllComponentsByCategory(newList).then(response => {
        this.currentList = newList
        this.componentsList = getComponentsCode(response)
        this.componentTitle = newList
      })
    },
    getComponentHTML(component) {
      return this.componentsHTML[component]
    }
  },
  components: { Feed, Sidebar }
})
