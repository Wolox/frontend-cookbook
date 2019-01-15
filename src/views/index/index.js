import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const ButtonGroup = () => import(/* webpackChunkName: "example" */ '../../components/Button')
const CheckboxGroup = () => import(/* webpackChunkName: "example" */ '../../components/Checkbox')
const ProgressBar = () => import(/* webpackChunkName: "example" */ '../../components/ProgressBar')
const RadioButtons = () => import(/* webpackChunkName: "example" */ '../../components/RadioButtons')
const Spinner = () => import(/* webpackChunkName: "example" */ '../../components/Spinner')
const InputGroup = () => import(/* webpackChunkName: "example" */ '../../components/Input')
const Sidebar = () => import(/* webpackChunkName: "example" */ '../../components/Sidebar')

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
    InputGroup,
    Sidebar,
    ProgressBar,
    ButtonGroup,
    Spinner
  }
})

if (process.env.NODE_ENV === 'production') installServiceWorker()
