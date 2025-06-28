import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',
  props: {
    alert: {
      type: Object,
      required: false,
    },
  },

  template: `
    <div v-if="alert" class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{ alert.sender_name }}:
        {{ alert.description }}</span>
    </div>
  `,
})
