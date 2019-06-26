import Vue from 'vue'
import 'regenerator-runtime/runtime'

import Sidebar from '../../components/Sidebar'
import CodeSnippet from '../../components/CodeSnippet'

import './detail.pug'
import './detail.scss'

import { getComponentFiles } from '../../services/componentService'

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
const component = urlParams.get('component')

const vm = new Vue({
  el: '#app',
  data: {
    componentTitle: component.replace('-', ' '),
    html: '',
    scss: '',
    currentList: category
  },
  mounted() {
    getComponentFiles(category, component).then(response => {
      this.html = response[0].object.text
      this.scss = response[2].object.text
      const elem = document.querySelector('#host')
      const shadowRoot = elem.attachShadow({mode: 'open'})
      shadowRoot.innerHTML = `${this.html}<style>${response[1].object.text}</style>`
    })
  },
  methods: {
    changeCurrentList({ category, goToFeed }) {
      localStorage.setItem('category', category)
      if (goToFeed) window.location.href = '/'
    }
  },
  components: { Sidebar, CodeSnippet }
})
