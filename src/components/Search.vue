<template>
  <form @submit.prevent="handleSubmit">
    <h2>Select your weather thresholds and find out if you can go outside</h2>
    
    <label>Min Temperature:</label>
    <select v-model.number="minTemp">
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
    </select>
    
    <label>Max Temperature:</label>
    <select v-model.number="maxTemp">
      <option value="80">80</option>
      <option value="90">90</option>
      <option value="100">100</option>
    </select>

    <label>Wind Speed:</label>
    <select v-model.number="wind">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>

    <label>Probability of Precipitation:</label>
    <select v-model.number="precipitation">
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="70">70</option>
    </select>

    <button>Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Search',
  components: {},
  data() {
    return {
      minTemp: 50,
      maxTemp: 90,
      wind: 10,
      precipitation: 50
    }
  },
  methods: {
    handleSubmit() {

      let thresholds = {
        temperature: {
          low: this.minTemp,
          high: this.maxTemp
        },
        windSpeed: this.wind,
        probOfPrecip: this.precipitation
      }

      this.$emit('getForecast', thresholds)
      this.$router.push('/results')
    }
  }
})
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 3;
}

select {
  color: black;
  border-radius: 0.2vw;
}

label {
  padding: 1vh;
}
</style>