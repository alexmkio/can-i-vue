<template>
  <header>
    <router-link to='/'>
      <h1>Can I look at a tree?</h1>
    </router-link>
  </header>
  <main v-if="errorCode">
    <Error />
  </main>
  <main v-else>
    <router-view
      @getforecast="getForecast"
      @grandparentlistener="addToCalendar"
      :notice="notice"
      :suitableHours="suitableHours"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fetchData } from './composables/fetchCalls'
import { cleanData } from './composables/cleanData'
import { determineSuitableHours, craftNotice } from './composables/utils'
import { CleanedHour, Thresholds, IpFetch, Notice } from './interfaces/index'
import Error from './components/Error.vue'

export default defineComponent({
  name: 'App',
  components: {
    Error
  },
  data() {
    return {
      errorCode: 0,
      coordinates: null as IpFetch | null,
      forecast: [] as CleanedHour[],
      suitableHours: [] as CleanedHour[],
      notice: null as Notice | null,
      schedule: []
    }
  },
  async mounted() {
    let ipKey = `103a0ac5b110412c9a639e3ab5afd99f`
    let ipParams = `&fields=latitude,longitude,time_zone`
    let weatherURL = `https://api.weather.gov/points/`
    try {
      let coordinates = await fetchData(
        `https://api.ipgeolocation.io/ipgeo?apiKey=${ipKey}${ipParams}`
      )
      let gridPoints = await fetchData(
        `${weatherURL}${coordinates.latitude},${coordinates.longitude}`
      )
      let forecast = await fetchData(gridPoints.properties.forecastGridData)
      let cleanedData = cleanData(forecast)
      this.coordinates = coordinates
      this.forecast = cleanedData
    } catch (error) {
      this.errorCode = Number(error.message)
    }
  },
  methods: {
    getForecast(thresholds: Thresholds) {
      if (this.coordinates) {
        let suitableHours = determineSuitableHours(
          thresholds,
          this.forecast,
          this.coordinates.time_zone.name
        )
        let notice = craftNotice(suitableHours, this.coordinates.time_zone.name)
        this.notice = notice
        this.suitableHours = suitableHours
      }
    },
    addToCalendar(argument: CleanedHour) {
      console.log('ADDING', argument)
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  text-align: center;
}

html {
  min-height: 100vh;
  background: url('./assets/nice.jpeg') no-repeat center center fixed;
  background-size: cover;
}

body {
  display: flex;
  flex-direction: column;
  font-size: larger;
  color: white;
}

a:link {
  color: white;
}

a:visited {
  color: white;
}

a:hover {
  color: yellow;
}

a:active {
  color: red;
}

h1, h2 {
  text-transform: capitalize;
  padding: 1vh;
  line-height: 1.2;
}

header {
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
}

main {
  margin-top: 8vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1vw;
}
</style>
