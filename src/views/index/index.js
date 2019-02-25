import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const ButtonGroup = () => import(/* webpackChunkName: "Button" */ '../../components/Button')
const CheckboxGroup = () => import(/* webpackChunkName: "Checkbox" */ '../../components/Checkbox')
const ProgressBar = () => import(/* webpackChunkName: "ProgressBar" */ '../../components/ProgressBar')
const RadioButtons = () => import(/* webpackChunkName: "RadioButton" */ '../../components/RadioButtons')
const Spinner = () => import(/* webpackChunkName: "Spinner" */ '../../components/Spinner')
const InputGroup = () => import(/* webpackChunkName: "Input" */ '../../components/Input')
const Sidebar = () => import(/* webpackChunkName: "Sidebar" */ '../../components/Sidebar')

import CardList from '../../components/CardList'

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Frontend Cookbook',
    currentList: 'spinners'
  },
  methods: {
    changeCurrentList(newList) {
      this.currentList = newList
    }
  },
  components: {
    CardList,
    CheckboxGroup,
    RadioButtons,
    InputGroup,
    Sidebar,
    ProgressBar,
    ButtonGroup,
    Spinner
  }
})

if (process.env.NODE_ENV === 'production') installServiceWorker()
