<template>
  <div class="col-md-6 mb-4">
    <div class="card text-left">
      <h3 class="card-header" :class="headerColor">{{ stock.name }}&nbsp;
        <small class="text-muted" v-if="isInStocks">(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small>
        <small class="text-muted">(price: {{ stock.price }})</small>
      </h3>
      <div class="card-block d-flex justify-content-between align-items-start">
        <div class="form-group w-50 m-0">
          <input type="text" class="form-control" id="quantity" placeholder="Quantity">
        </div>
        <a href="#" v-if="!isInStocks" class="btn btn-success">Buy</a>
        <a href="#" v-if="isInStocks" class="btn btn-danger">Sell</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
    }
  },
  computed: {
    isInStocks() {
      return this.stock.quantity;
    },
    headerColor() {
      return this.isInStocks ? 'bg-blue' : 'bg-green';
    }
  },
  methods: {}
}
</script>

<style scoped>
  .bg-blue {
    background-color: #d8e3ff;
  }
  .bg-green {
    background-color: #D8FFD3;
  }
</style>
