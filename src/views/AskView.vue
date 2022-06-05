<template>
  <ul class="news-list">
    <li v-for="item in fetchedAsk" :key="item.id" class="post">
      <!-- 포인트 영역 -->
      <div class="points">
        {{ item.points ? item.points : 'X' }}
      </div>
      <!-- 기타 정보 영역 -->
      <div>
        <p class="news-title">
          <router-link v-bind:to="`item/${item.id}`" >
            {{ item.title }}
          </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
          <router-link :to="item.user ? `user/${item.user}` : ''" class="link-text">
            <b>{{ item.user ? item.user : 'Anonymous' }}</b>
          </router-link>
        </small>
      </div>
    </li>
  </ul>
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