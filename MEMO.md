# Vue Fundamental

## Vue Life cycle

[https://beomy.tistory.com/47](https://beomy.tistory.com/47)

## Vuex Data Flow

[https://vuex.vuejs.org/#what-is-a-state-management-pattern](https://vuex.vuejs.org/#what-is-a-state-management-pattern)



## Vuex

### Vuex에서의 데이터 처리 흐름
`store`의 데이터는 항상 시퀀셜하게 컴포넌트에 표현됩니다. `state`를 뷰 컴포넌트에서 가져다 쓸 때에는 항상 `state`의 값을 최신 상태로 유지해서 컴포넌트에 뿌리게 됩니다. 스토어에서 비동기 코드는 `actions`에 오기 때문에 `actions`에서 `mutations`으로 `commit` 하시면 항상 순서가 보장되어 있게 됩니다.

