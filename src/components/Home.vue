<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card text-left">
        <div class="card-block">
          <h2 class="card-title">Trade or View your Portfolio</h2>
          <p class="card-text header-card-text">You may Save & Load your Data</p>
          <p class="card-text header-card-text">Click to the 'End Day' to begin a new Day!</p>
          <p class="card-text header-card-text">Try to earn 100,000 UAH!</p>
          <hr/>
          <strong class="card-text">Funds: {{ money | currency }} UAH</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    money() {
      return this.$store.getters.getMoney;
    }
  }
}
</script>

<style scoped>
  .header-card-text {
    font-size: .9rem;
    line-height: .5;
  }
</style>
