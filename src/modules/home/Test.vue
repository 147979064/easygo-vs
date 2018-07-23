<template>
  <div id="home">
<button name="mybtn" :click="fetchData()"></button>

    <hr>
    <div id="content"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      fetchData () {
        console.log('submit!')
      }
    }
  }
</script>
