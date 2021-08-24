<template>
  <form>
    <h2>Select your weather thresholds and find out if you can go outside</h2>
    
    <label>Min Temperature:</label>
    <select v-model="minTemp">
      <option value="40">40</option>
      <option value="50">50</option>
      <option value="60">60</option>
    </select>
    
    <label>Max Temperature:</label>
    <select v-model="maxTemp">
      <option value="80">80</option>
      <option value="90">90</option>
      <option value="100">100</option>
    </select>

    <label>Wind Speed:</label>
    <select v-model="wind">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>

    <label>Probability of Precipitation:</label>
    <select v-model="precipitation">
      <option value="30">30</option>
      <option value="50">50</option>
      <option value="70">70</option>
    </select>

    <!-- <Link to='/results' onClick={() => onSubmitSearch()}>
      Submit
    </Link> -->
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