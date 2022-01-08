<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Hello msg="Welcome to Your Vue.js App"/> -->
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/books">图书</router-link>
      <router-link to="/videos">视频</router-link>

    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
