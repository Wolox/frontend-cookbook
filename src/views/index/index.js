import Vue from 'vue'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    currentList: ''
  }
})