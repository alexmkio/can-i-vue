<template>
  <section className='results'>
    <section v-if="nice">
      <h2>Good news!</h2>
      <p>You can go outside for {{ hours }} hours!</p>
    </section>
    <section v-else>
      <h2>Bad news</h2>
      <p>You can't go outside for {{ hours }} hours!</p>
    </section>
    <router-link to='/good_weather'>
      See all the future good weather
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Results',
  components: {},
  data() {
    return {
      hours: 666,
      nice: true
    }
  },
})
</script>

<style>
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1vh;
}
</style>