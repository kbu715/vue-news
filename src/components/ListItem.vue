<template>
  <ul class="news-list">
    <li v-for="item in listItems" :key="item.id" class="post">
      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <!-- 기타 정보 영역 -->
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a v-bind:href="item.url" target="_blank" rel="noopener noreferrer">
              {{ item.title }}
            </a> 
          </template>
          <template v-else>
            <router-link v-bind:to="`item/${item.id}`" >
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
          <router-link v-if="item.user" :to="item.user ? `user/${item.user}` : ''" class="link-text">
            <b>{{ item.user || 'Anonymous' }}</b>
          </router-link>
          <a v-else :href="item.url" target="_blank" rel="noopener noreferrer" class="link-text">
            <b>{{ item.domain || 'Anonymous' }}</b>
          </a>
        </small>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  computed: {
    listItems() {
        const pathName = this.$route.name;
        if (pathName === 'news') {
          return this.$store.state.news;
        } else if (pathName === 'ask') {
          return this.$store.state.ask;
        } else if (pathName === 'jobs') {
          return this.$store.state.jobs;
        } else return [];
    }
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