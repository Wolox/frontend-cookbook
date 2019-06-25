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
      this.scss = response[1].object.text
      const elem = document.querySelector('#host')
      const shadowRoot = elem.attachShadow({mode: 'open'})
      shadowRoot.innerHTML = `${this.html}<style>${this.scss}</style>`
    })
  },
  methods: {
    changeCurrentList(newList) {
      localStorage.setItem('category', newList)
      this.currentList = newList.component
      this.componentsList = this.componentsHTML[newList.component]
      this.componentTitle = newList.title
    }
  },
  components: { Sidebar, CodeSnippet }
})
