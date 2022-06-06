import bus from '../utils/bus';
import ListView from './ListView.vue'

// high-order component
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name: `HOC${name}`,
    created() { // created를 재활용 함
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        console.log('fetched list: ' + this.$route.name);
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      })
    },
    // 내부적으로 createElement라는 함수를 파라미터로 받고
    // 이 함수에 ListView를 넘겨줌으로써 element를 생성한다.
    // render(createElement) {
    //   return createElement(ListView);
    // },
    render: (createElement) => createElement(ListView)
  }
}