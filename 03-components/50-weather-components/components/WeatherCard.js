import { computed, defineComponent } from 'vue'
import WeatherCardConditions from './WeatherCardConditions.js'
import WeatherAlert from './WeatherAlert.js'
import WeatherCardHeader from './WeatherCardHeader.js'
import WeatherDetailsItem from './WeatherDetailsItem.js'
import WeatherCardDetails from './WeatherCardDetails.js'

export default defineComponent({
  name: 'WeatherCard',
  components: {
    WeatherCardDetails,
    WeatherAlert,
    WeatherCardHeader,
    WeatherCardConditions,
    WeatherDetailsItem,
  },

  props: {
    weatherInfo: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const isNight = computed(() => {
      return (
        props.weatherInfo.current.sunset < props.weatherInfo.current.dt ||
        props.weatherInfo.current.dt < props.weatherInfo.current.sunrise
      )
    })
    return {
      isNight,
    }
  },

  template: `
    <li
      :class="{'weather-card--night': isNight}"
      class="weather-card"
    >
      <WeatherAlert
        :alert="weatherInfo.alert"/>
      <WeatherCardHeader
        :name="weatherInfo.geographic_name "
        :time="weatherInfo.current.dt"
      />
      <WeatherCardConditions
        :current-weather="weatherInfo.current"
      />
      <WeatherCardDetails
        :clouds="weatherInfo.current.clouds"
        :humidity="weatherInfo.current.humidity"
        :pressure="weatherInfo.current.pressure"
        :wind-speed="weatherInfo.current.wind_speed"
      />
    </li>
  `,
})
