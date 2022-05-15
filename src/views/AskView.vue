<template>
  <div>
    <p v-for="item in fetchedAsk" :key="item.id">
      <a :href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by <b>{{ item.user }}</b></small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  computed: {
    // # 4
    ...mapGetters(['fetchedAsk'])


    // # 1
    // ask() {
    //   return this.$store.state.ask;
    // }    


    // # 2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // # 3
    // ...mapGetters({
    //   askItems: 'fetchedAsk'
    // })
  },


}
</script>

<style>

</style>