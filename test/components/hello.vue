<template>
  <div class="hello">
      <button @click="test">这个是hello 组件</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
      return{
          hello: '123'
      }
  },
  methods: {
      test() {
          alert('hello')
      }
  }
}
</script>

