import Vue from 'vue'

import Sidebar from '../../components/Sidebar'

import './detail.pug'
import './detail.scss'

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
const component = urlParams.get('component')

const vm = new Vue({
  el: '#app',
  data: {
    component,
    currentList: category
  },
  components: { Sidebar }
})
