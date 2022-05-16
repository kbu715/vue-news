<template>
  <div>
    <p>
      {{ this.$store.state.item.title }}
    </p>
    <div>
      {{ this.$store.state.item.content }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    askDetailsInfo() {
      return this.$store.state.askDetails;
    }
  },
  created() {
    console.log(this.$route.params.id);
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>

</style>