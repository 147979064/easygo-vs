<template>
  <div id="home">
    <header class="header">
      <router-link to="/home/home">home</router-link>
      <router-link to="/home/login">login</router-link>
    </header>

    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss"  scoped>
  .header{


    height:4.4rem;

    background:#000;

    color:#fff;

    line-height:4.4rem;

    text-align:center;

  a{
    color:#fff;

    padding:0 2rem

  }
  }
</style>
