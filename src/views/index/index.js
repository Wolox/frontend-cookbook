import Vue from 'vue'

import { installServiceWorker } from '../../serviceWorkerInstaller'

const  Checkbox = () => import(/* webpackChunkName: "example" */ '../../components/Spinner')
const Sidebar = () => import(/* webpackChunkName: "example" */ '../../components/Sidebar')

import './index.pug'
import './index.scss'

const vm = new Vue({
  el: '#app',
  data: {
    title: 'Frontend Bootstrap!'
  },
  components: {
    Checkbox,
    Sidebar
  }
})

if (process.env.NODE_ENV === 'production') installServiceWorker()
