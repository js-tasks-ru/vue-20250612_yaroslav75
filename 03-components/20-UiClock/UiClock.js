import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const time = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }))

    const updateTime = () => {
      time.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    onMounted(() => {
      setInterval(() => {
        updateTime()
      }, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(updateTime)
    })

    return {
      time,
    }
  },

  template: `
    <!--    <div class="clock">10:12:02</div>-->
    <div class="clock">{{ time }}</div>
  `,
})
