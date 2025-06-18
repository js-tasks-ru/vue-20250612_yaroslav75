import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherIcon = id => {
      return WeatherConditionIcons[id]
    }

    const kelvinToCelsius = temp => {
      const celsius = temp - 273.15
      return celsius.toFixed(1)
    }

    const getPressure = pressure => {
      return Math.round(pressure * 0.75)
    }

    const isNight = (currentTime, sunriseTime, sunsetTime) => {
      return sunsetTime < currentTime || currentTime < sunriseTime
    }

    return {
      weatherIcon,
      kelvinToCelsius,
      getPressure,
      isNight,
      weatherData: getWeatherData(),
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <ul class="weather-list unstyled-list">
        <li v-for="weatherInfo in weatherData"
            :class="{'weather-card--night': isNight(weatherInfo.current.dt, weatherInfo.current.sunrise, weatherInfo.current.sunset)}"
            class="weather-card">
          <div v-if="weatherInfo.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weatherInfo.alert.sender_name }}:
              {{ weatherInfo.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weatherInfo.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weatherInfo.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weatherInfo.current.weather.description">
              {{ weatherIcon(weatherInfo.current.weather.id) }}
            </div>
            <div class="weather-conditions__temp">{{ kelvinToCelsius(weatherInfo.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ getPressure(weatherInfo.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weatherInfo.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weatherInfo.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weatherInfo.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
