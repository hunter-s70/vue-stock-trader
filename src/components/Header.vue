<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded my-4">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="{name: 'Home'}" class="navbar-brand" exact>Stock Trader</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{name: 'Portfolio'}" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Stocks'}" class="nav-link">Stocks</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <ul class="navbar-nav mx-2">
        <li class="nav-item">
          <span class="nav-link pointer" @click="dayEnd">End Day</span>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              Save & Load
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
            </div>
          </div>
        </li>
      </ul>
      <strong class="navbar-text">Funds: {{ money }} UAH</strong>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    dayEnd() {
      this.$store.commit('setRandomPrice');
    }
  },
  computed: {
    money() {
      return this.$store.getters.getMoney;
    }
  }
}
</script>

<style scoped>
  .nav-link.router-link-active {
    text-decoration: underline;
  }
  .pointer {
    cursor: pointer;
  }
</style>
