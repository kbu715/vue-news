<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/chart">Chart</router-link> |
    <router-link to="/date-picker">Date-Picker</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  color: #fff;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

.header .router-link-exact-active {
  color: #35495e;
}

.header a {
  color: #fff;
  font-weight: 700;
  padding: 0 5px;
}
</style>