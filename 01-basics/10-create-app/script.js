import { createApp, defineComponent } from 'vue'

const App = defineComponent({
  name: 'App',
  setup() {
    return {
      formatDate() {
        return new Date().toLocaleDateString(navigator.language, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      },
    }
  },

  template: '<div> Сегодня {{formatDate()}} </div>',
})

createApp(App).mount('#app')
