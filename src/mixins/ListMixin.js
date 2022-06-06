import bus from '../utils/bus';

export default {
  // 재사용할 컴포넌트 옵션
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
}

// hoc
// export default function create() {
//   // 재사용할 컴포넌트 옵션
// }