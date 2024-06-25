import '../scss/app.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/index.umd'

import.meta.glob([
    '../img/**'
])


import { createApp } from 'vue'
import '../scss/app.scss'
import App from '../../App.vue'

createApp(App).mount('#app')
