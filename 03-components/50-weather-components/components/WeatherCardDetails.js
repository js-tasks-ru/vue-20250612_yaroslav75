import { computed, defineComponent } from 'vue'
import WeatherDetailsItem from './WeatherDetailsItem.js'

export default defineComponent({
  name: 'WeatherCardDetails',
  components: { WeatherDetailsItem },
  props: {
    pressure: {
      type: Number,
      required: true,
    },

    humidity: {
      type: Number,
      required: true,
    },

    clouds: {
      type: Number,
      required: true,
    },

    windSpeed: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const convertedPressure = computed(() => {
      return Math.round(props.pressure * 0.75)
    })
    return {
      convertedPressure,
    }
  },

  template: `
    <div class="weather-details">
      <WeatherDetailsItem
        label="Давление, мм рт. ст."
        :value="convertedPressure"/>
      <WeatherDetailsItem
        label="Влажность, %"
        :value="humidity"/>
      <WeatherDetailsItem
        label="Облачность, %"
        :value="clouds"/>
      <WeatherDetailsItem
        label="Ветер, м/с"
        :value="windSpeed "/>
    </div>
  `,
})
