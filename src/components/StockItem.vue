<template>
  <div class="col-md-6 mb-4">
    <div class="card text-left">
      <h3 class="card-header" :class="headerColor">{{ stock.name }}&nbsp;
        <small class="text-muted" v-if="isInStocks">(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small>
        <small class="text-muted" v-if="!isInStocks">(price: {{ stock.price }})</small>
      </h3>
      <div class="card-block d-flex justify-content-between align-items-start">
        <div class="form-group w-50 m-0">
          <input type="number" class="form-control" placeholder="Quantity" v-model="setQuantity">
        </div>
        <button v-if="!isInStocks" class="btn btn-success" @click="buyStock">Buy</button>
        <button v-if="isInStocks" class="btn btn-danger" @click="sellStock">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      setQuantity: ''
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
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        name: this.stock.name,
        price: +this.stock.price,
        quantity: +this.setQuantity
      };
      this.$store.dispatch('buyStock', order);
    },
    sellStock() {}
  }
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
