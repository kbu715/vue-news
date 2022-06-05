<template>
  <ul class="news-list">
    <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
      <!-- 포인트 영역 -->
      <div class="points">
        {{ job.points || 0 }}
      </div>
      <!-- 기타 정보 영역 -->
      <div>
        <p class="news-title">
          <a v-bind:href="job.url" target="_blank" rel="noopener noreferrer">
            {{ job.title }}
          </a>
        </p>
        <small class="link-text">
          {{ job.time_ago }} by
          <a :href="job.url" target="_blank" rel="noopener noreferrer" class="link-text"><b>{{ job.domain || 'Anonymous' }}</b></a>     
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>

.news-list {
  margin: 0;
  padding: 0;
}

.news-title {
  margin: 0; 
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.link-text {
  color: #828282;
}

</style>