<template>
  <ul class="news-list">
    <li v-for="item in this.$store.state.news" :key="item.id" class="post">
      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <!-- 기타 정보 영역 -->
      <div>
        <p class="news-title">
          <a v-bind:href="item.url" target="_blank" rel="noopener noreferrer">
            {{ item.title }}
          </a>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
          <router-link :to="item.user ? `user/${item.user}` : ''" class="link-text">
            <b>{{ item.user || 'Anonymous' }}</b>
          </router-link>
        </small>
      </div>
    </li>
  </ul>
</template>


<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
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