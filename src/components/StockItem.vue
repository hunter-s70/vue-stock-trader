<template>
  <div class="col-md-6 mb-4">
    <div class="card text-left">
      <h3 class="card-header" :class="headerColor">{{ stock.name }}&nbsp;
        <small class="text-muted" v-if="isInStocks">(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small>
        <small class="text-muted" v-if="!isInStocks">(price: {{ stock.price }})</small>
      </h3>
      <div class="card-block d-flex justify-content-between align-items-start">
        <div class="form-group w-50 m-0">
          <input type="number"
                 class="form-control"
                 :class="{danger: (!isInStocks && priceError) || (isInStocks && quantityError)}"
                 placeholder="Quantity"
                 v-model="setQuantity">
        </div>
        <button v-if="!isInStocks"
                class="btn btn-success"
                @click="buyStock"
                :disabled="isDisabled || priceError">Buy</button>
        <button v-if="isInStocks"
                class="btn btn-danger"
                @click="sellStock"
                :disabled="isDisabled || quantityError">Sell</button>
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
    money() {
      return this.$store.getters.getMoney;
    },
    priceError() {
      return +this.stock.price * +this.setQuantity > +this.money;
    },
    quantityError() {
      return +this.setQuantity > +this.stock.quantity;
    },
    isDisabled() {
      return +this.setQuantity <= 0 || !Number.isInteger(+this.setQuantity);
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
      this.setQuantity = '';
    },
    sellStock() {
      const order = {
        id: this.stock.id,
        price: +this.stock.price,
        quantity: +this.setQuantity
      };
      this.$store.dispatch('sellStock', order);
      this.setQuantity = '';
    }
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
  .danger {
    border: solid 1px #ff727c;
  }
</style>
