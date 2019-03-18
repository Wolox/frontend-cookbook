import Vue from 'vue'

import Feed from '../../components/Feed'
import Sidebar from '../../components/Sidebar'

import spinners from '../../resources/spinners'
import input from '../../resources/input'
import checkboxes from '../../resources/checkboxes'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Frontend Cookbook',
    componentsHTML: { spinners, input, checkboxes },
    currentList: 'spinners',
    componentsList: spinners
  },
  methods: {
    changeCurrentList(newList) {
      this.currentList = newList
      this.componentsList = this.componentsHTML[newList]
    }
  },
  components: { Feed, Sidebar }
})
