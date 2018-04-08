<template>
  <div class="hello">
      <button @click="test">这个是第二 组件</button>
  </div>
</template>

<script>
export default {
  name: 'second',
  data() {
      return{
          second: '456'
      }
  },
  methods: {
      test() {
          alert('second')
      }
  }
}
</script>

