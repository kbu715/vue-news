<template>
  <div>
        <canvas ref="barChart" id="myBarChart" width="400" height="400"></canvas>
  </div>
</template>
<script>

export default {
    props: ['datasets'],
    mounted() {
    new this.$_Chart(this.$refs.barChart, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasets
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }
}
</script>
<style>
  
</style>