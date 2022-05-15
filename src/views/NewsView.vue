<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by <b>{{ item.user }}</b></small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>