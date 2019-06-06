import Vue from 'vue'

import Sidebar from '../../components/Sidebar'
import CodeSnippet from '../../components/CodeSnippet'

import './detail.pug'
import './detail.scss'

import mock from '../../utils/mock'
import { getComponentFile } from '../../utils/graphql';

const urlParams = new URLSearchParams(window.location.search)
const category = urlParams.get('category')
const component = urlParams.get('component')

const vm = new Vue({
  el: '#app',
  data: {
    componentToRender: mock,
    currentList: category
  },
  created () {
    let html = {};
    let scss = {};
    let componentName = component.split('-').join(' ');
    componentName = componentName[0].toUpperCase() + componentName.slice(1);
    getComponentFile(category, componentName, 'index.html')
      .then(jsonfile => html = jsonfile);
    
    getComponentFile(category, componentName, 'styles.scss')
      .then(jsonfile => scss = jsonfile);
    this.componentToRender = { title: component, html, css: scss };
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
  components: { Sidebar, CodeSnippet },
})
