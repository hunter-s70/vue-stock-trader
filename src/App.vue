<template>
  <div id="app" class="container">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  data () {
    return {
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
