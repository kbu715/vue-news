import Chart from 'chart.js';

export default {
  install(Vue) {
    // $_ => Vue에서 권고하는 스타일
    Vue.prototype.$_Chart = Chart;

  }
}