import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const ButtonGroup = () => import(/* webpackChunkName: "example" */ '../../components/Button/index')
const CheckboxGroup = () => import(/* webpackChunkName: "example" */ '../../components/Checkbox/index')
const RadioButtons = () => import(/* webpackChunkName: "example" */ '../../components/RadioButtons/index')
const Spinner = () => import(/* webpackChunkName: "example" */ '../../components/Spinner/index')
const Sidebar = () => import(/* webpackChunkName: "example" */ '../../components/Sidebar')

// TODO refactor this components
const ProgressBar = () => import(/* webpackChunkName: "example" */ '../../components/ProgressBar/index')
// const InputGroup = () => import(/* webpackChunkName: "example" */ '../../components/Input')

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Frontend Cookbook',
    currentComponent: 'spinner'
  },
  methods: {
    changeView(value) {
      this.currentComponent = value
    }
  },
  components: {
    CheckboxGroup,
    Sidebar,
    RadioButtons,
    Sidebar,
    ProgressBar,
    ButtonGroup,
    Spinner
  }
})

if (process.env.NODE_ENV === 'production') installServiceWorker()
