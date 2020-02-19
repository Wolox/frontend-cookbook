import Vue from 'vue'

import Sidebar from '../../components/Sidebar'
import CodeSnippet from '../../components/CodeSnippet'

import './detail.pug'
import './detail.scss'

import { getComponentFiles } from '../../services/componentService'
import { userIsLoggedIn } from '../../services/loginService'

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
const component = urlParams.get('component')

const vm = new Vue({
  el: '#app',
  data: {
    isUserLoggedIn: false,
    componentTitle: component.replace('-', ' '),
    html: '',
    scss: '',
    currentCode: 'html',
    isSettingsVisible: true
  },
  created() {
    this.isUserLoggedIn = process.env.NODE_ENV !== 'production' ? true : userIsLoggedIn()
  },
  mounted() {
    getComponentFiles(category, component).then(response => {
      this.html = response[0].object.text
      this.scss = response[2].object.text
      const elem = document.querySelector('#host')
      const shadowRoot = elem.attachShadow({
        mode: 'open'
      })
      shadowRoot.innerHTML = `${this.html}<style>${response[1].object.text}</style>`
    })
  },
  methods: {
    changeCurrentList({
      category,
      goToFeed
    }) {
      localStorage.setItem('category', category)
      if (goToFeed) window.location.href = '/home'
    },
    changeCurrentCode(type) {
      this.currentCode = type
    }
  },
  components: {
    Sidebar,
    CodeSnippet
  }
})
