<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';
export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    setTimeout(() => {
      this.$store.dispatch('FETCH_JOBS')
      .then(() => {
        console.log('fetched jobs');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
    }, 1000);
  }
}
</script>
