<template>
  <div id="app">
    <resumePage></resumePage>
  </div>
</template>

<script>
import resumePage from './page/resume.vue'
export default {
  name: 'App',
  components: {
    resumePage
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
