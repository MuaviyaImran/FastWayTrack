import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { BaseButton, BaseProgressbar } from './components/common'
import App from './App.vue'
import router from './router'

interface AppComponents {
  BaseButton: typeof BaseButton
  BaseProgressbar: typeof BaseProgressbar
}
// register global components here [nameOfTheComponent: Component]
const components: AppComponents = {
  BaseButton: BaseButton,
  BaseProgressbar: BaseProgressbar,
}
const app = createApp(App)
Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
