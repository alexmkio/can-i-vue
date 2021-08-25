<template>
  <section className='poss'>
      <section className='possBlurb'>
        <h2>Suitable hours to be outside</h2>
        <p>Click on an hour to add or delete it from your calendar</p>
        <router-link to='/calendar'>Your calendar</router-link>
      </section>
      <section className='cards'>
        <article v-for="hour in suitableHours"
          :key="hour.month + hour.day + hour.hour"
          className='card'
        >
          <hour-card :hour="hour" @addToCalendar="addToCalendar" />
        </article>
      </section>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HourCard from './HourCard.vue';

export default defineComponent({
  name: 'Possibilities',
  components: { HourCard },
  props: {
    suitableHours: Array
  }
});
</script>

<style>
.card {
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 1px 0px 4px 3px rgba(0, 0, 0, 0.7);
  transition: 0.3s;
  padding: 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.poss {
  display: flex;
  flex-direction: column;
}

.possBlurb {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  margin: 1vh auto;
  display: grid;
  gap: 1rem;
}

@media (min-width: 550px) {
  .cards {
    gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 810px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1600px) {
  .cards {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>