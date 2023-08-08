import type { App } from 'vue'
import SimpleDarkMode from './SimpleDarkMode.vue'

export default {
  install: (app: App) => {
    app.component('SimpleDarkMode', SimpleDarkMode)
  }
}

