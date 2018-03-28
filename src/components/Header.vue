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
      <ul class="navbar-nav mr-2">
        <li class="nav-item">
          <button class="btn btn-secondary mr-2"
                  type="button"
                  :disabled="canEndingDay"
                  @click="dayEnd">End day</button>
        </li>
        <li class="nav-item">
          <div class="dropdown" :class="{show: dropdownToggle}">
            <button class="btn btn-secondary dropdown-toggle"
                    type="button"
                    @click="dropdownToggle = !dropdownToggle">
              Save & Load
            </button>
            <div class="dropdown-menu">
              <span class="dropdown-item pointer" @click="saveData">Save Data</span>
              <span class="dropdown-item pointer" @click="loadData">Load Data</span>
            </div>
          </div>
        </li>
      </ul>
      <strong class="navbar-text mr-2">Funds: {{ money | currency }} UAH</strong>
      <strong class="navbar-text">Day: {{ day }}</strong>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdownToggle: false
    }
  },
  methods: {
    dayEnd() {
      this.$store.commit('setRandomPrice');
      this.$store.commit('endingDayToggle', false);
      this.$store.commit('levelUp');
    },
    saveData() {
      const data = {
        money: this.$store.getters.getMoney,
        portfolioStocks: this.$store.getters.getPortfolioStocks,
        allStocks: this.$store.getters.getStocks
      };
      this.$store.dispatch('saveData', data);
      this.dropdownToggle = false;
    },
    loadData() {
      this.$store.dispatch('loadData');
      this.dropdownToggle = false;
    }
  },
  computed: {
    money() {
      return this.$store.getters.getMoney;
    },
    day() {
      return this.$store.getters.getLevel;
    },
    canEndingDay() {
      return !this.$store.getters.getEndingDay;
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
