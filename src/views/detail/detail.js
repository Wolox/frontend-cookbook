import Vue from 'vue'

import Sidebar from '../../components/Sidebar'
import CodeSnippet from '../../components/CodeSnippet'

import './detail.pug'
import './detail.scss'

import mock from '../../utils/mock'

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
const component = urlParams.get('component')

const vm = new Vue({
  el: '#app',
  data: {
    componentToRender: mock,
    currentList: category
  },
  mounted() {
    const elem = document.querySelector('#host')
    const shadowRoot = elem.attachShadow({mode: 'open'})
    shadowRoot.innerHTML = `${mock.html}<style>${mock.css}</style>`
  },
  methods: {
    changeCurrentList(newList) {
      this.currentList = newList.component
      this.componentsList = this.componentsHTML[newList.component]
      this.componentTitle = newList.title
    }
  },
  components: { Sidebar, CodeSnippet }
})
