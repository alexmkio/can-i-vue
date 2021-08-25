<template>
  <label>
    <button className="material-icons-outlined md-24 icon"
      @click="handleClick"
    >
      {{ hour.inCalendar ? 'remove' : 'add' }}
    </button>
  </label>

  <dl>
    <dt>Date:</dt>
    <dd>{{ calendar.months.find(month => month.number === hour.month)?.name }} {{ hour.day }}</dd>

    <dt>Hour:</dt>
    <dd>{{ calendar.hours.find(thisHour => thisHour.number === hour.hour)?.name }}</dd>

    <dt>Temperature:</dt>
    <dd>{{ hour.temperature }} <span>&#8457;</span></dd>

    <dt>Wind Speed:</dt>
    <dd>{{ hour.windSpeed }} mph</dd>

    <dt>Probability of Precipitation:</dt>
    <dd>{{ hour.precipProb }}%</dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { calendar } from '../composables/time'

export default defineComponent({
  name: 'HourCard',
  components: {},
  props: {
    hour: Object
  },
  data() {
    return {
      calendar
    }
  },
  methods: {
    handleClick() {
      console.log('heyyyyyyy')
      this.$emit('addToCalendar', 'argu')
    }
  }
})
</script>

<style>
.material-icons-outlined.md-24 {
  font-size: 24px;
}

.icon {
  color: black;
  background-color: yellow;
  border-radius: 50%;
  border: 8px solid yellow;
  transition: 0.3s;
}

.icon:hover {
  transform: scale(1.2);
  color: black;
  background-color: yellow;
  border-radius: 50%;
  border: 8px solid yellow;
  cursor: pointer;
}

dl {
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

dt {
  margin-top: 1rem;
  font-size: .9rem;
  text-transform: uppercase;
  line-height: 1;
}

dd {
  font-size: 1.4rem;
  text-transform: capitalize;
}
</style>