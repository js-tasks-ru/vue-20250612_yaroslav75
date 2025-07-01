import { computed, defineComponent } from 'vue'
import { WeatherConditionIcons } from '../weather.service.ts'

export default defineComponent({
  name: 'WeatherConditions',
  props: {
    currentWeather: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const weatherIcon = computed(() => {
      return WeatherConditionIcons[props.currentWeather.weather.id]
    })

    const celsiusTemperature = computed(() => {
      const celsius = props.currentWeather.temp - 273.15
      return celsius.toFixed(1)
    })
    return {
      weatherIcon,
      celsiusTemperature,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="currentWeather.weather.description">
        {{ weatherIcon }}
      </div>
      <div class="weather-conditions__temp">{{ celsiusTemperature }} °C</div>
    </div>
  `,
})
