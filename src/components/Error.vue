<template>
  <article className='error-container'>
    <div className='error-div'>
      <h2 className='error-h2'>Error {{ matchingResponse.code }}</h2>
      <h3>{{ matchingResponse.message }}</h3>
      <p>{{ matchingResponse.description }}</p>
      <router-link to='/'>
        <button className='details-back' @click="handleClick">Back</button>
      </router-link>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { httpResponses } from '../composables/httpResponses'
import { HttpResponse } from '../interfaces/index'

export default defineComponent({
  name: 'Error',
  props: {
    errorCode: Number
  },
  emits: ["clearerror"],
  data() {
    return {
      matchingResponse: {} as HttpResponse | undefined
    }
  },
  mounted() {
    this.matchingResponse = httpResponses.find(response =>
    response.code === this.errorCode)
  },
  methods: {
    handleClick() {
      this.$emit('clearerror')
    }
  }
})
</script>

<style>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.error-div {
  display: flex;
  flex-direction: column;
  max-width: 40vw;
}

.error-h2 {
  margin: 0;
}
</style>