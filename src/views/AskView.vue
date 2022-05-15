<template>
  <div>
    <div v-for="item in asks" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
  data() {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList()
          .then(response => this.asks = response.data)
          .catch(err => console.log(err));
  }
}
</script>

<style>

</style>