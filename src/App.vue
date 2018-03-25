<template>
  <div id="app" class="container">
    <app-header/>
    <transition name="slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  data() {
    return {
    }
  },
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks');
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
}
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  transition: opacity .3s;
}
.slide-leave {
  /*opacity: 1;*/
}
.slide-leave-active {
  transition: opacity .3s;
  opacity: 0;
}
</style>
