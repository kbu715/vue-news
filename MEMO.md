# Vue Fundamental

## Vue Life cycle

[https://beomy.tistory.com/47](https://beomy.tistory.com/47)

## Vuex Data Flow

[https://vuex.vuejs.org/#what-is-a-state-management-pattern](https://vuex.vuejs.org/#what-is-a-state-management-pattern)



## Vuex

### Vuex에서의 데이터 처리 흐름
`store`의 데이터는 항상 시퀀셜하게 컴포넌트에 표현됩니다. `state`를 뷰 컴포넌트에서 가져다 쓸 때에는 항상 `state`의 값을 최신 상태로 유지해서 컴포넌트에 뿌리게 됩니다. 스토어에서 비동기 코드는 `actions`에 오기 때문에 `actions`에서 `mutations`으로 `commit` 하시면 항상 순서가 보장되어 있게 됩니다.


### `<template></template>`

`text`만 존재하는 태그!


## 컴포넌트의 코드마저 재사용하는 하이 오더 컴포넌트

뷰의 하이 오더 컴포넌트는 리액트의 하이 오더 컴포넌트에서 기원된 것입니다.

A higher-order component (HOC) is an advanced technique in React for reusing component logic.

즉, 하이 오더 컴포넌트는 **컴포넌트의 로직(코드)을 재사용하기 위한 고급 기술 입니다.**

단점: 컴포넌트의 깊이가 깊어짐으로써 컴포넌트 간 통신이 불편해진다.


## Mixins

믹스인은 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법입니다.

믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트
옵션입니다.

```javascript
const HelloMixins = {
  // 컴포넌트 옵션 (data, methods, created 등)
}

new Vue({
  mixins: [HelloMixins]
})



// 실제로 있을 법한 예시

const DialogMixin = {
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
}


<!-- LoginForm.vue -->
<script>
import { DialogMixin } from './mixins.js';

export default {
  // ..
  mixins: [ DialogMixin ]
  methods: {
    submitForm() {
      axios.post('login', {
        id: this.id,
        pw: this.pw
      })
      .then(() => this.closeDialog())
      .catch((error) => new Error(error));
    }
  }
}
</script>
```



## HOC vs mixins

`HOC`를 이용한 접근 방식은 컴포넌트의 레이어를 복잡하게 만듭니다. 달리 말해 컴포넌트의 props, event 등을 넘겨야 하는 코드가 많아집니다. 이에 비해 `mixins`는 문법도 간단하고 입문자에게 버거운 `HOC` 사고 방식을 하지 않아도 되는 이점이 있습니다. 물론 컴포넌트 기능 테스트 측면에서는 `HOC`가 `mixins`보다 유리합니다. `관심사의 분리(sepration of concerns)`라는 측면에서는 컴포넌트의 역할이 깨끗이 분리가 되면서 기능을 확장할 수 있기 때문입니다.


## [데이터 호출 시점]

1. 라우터 네비게이션 가드
  - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)

2. 컴포넌트 라이프 사이클 훅
  - `created` : 컴포넌트가 생성 되자마자 호출되는 로직


