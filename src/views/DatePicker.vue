<template>
  <div class="container">
    <template>
      <DatePicker v-model="date" />
    </template>
  </div>
</template>
<script>
import ListMixin from '../mixins/ListMixin'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      date: new Date(),
    }
  },
  mixins: [ListMixin],
}
</script>
<style scoped>
  .container {
    height: calc(100vh - 21px - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>