import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherCardHeader',
  props: {
    name: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ name }}
      </h2>
      <div class="weather-card__time">
        {{ time }}
      </div>
    </div>
  `,
})
