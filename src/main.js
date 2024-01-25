import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入normalize.css，抹平不同浏览器之间的显示差异
import 'normalize.css'
//引入自定义style
import './style/index.scss'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
