<template>
  <div class="row">
    <stock-item v-for="stock in stocks"
                :stock="stock"
                :key="stock.id" />
  </div>
</template>

<script>
import StockItem from '@/components/StockItem';

export default {
  data() {
    return {}
  },
  computed: {
    stocks() {
      return this.$store.getters.getStocks;
    }
  },
  components: {
    'stock-item': StockItem
  }
}
</script>

<style scoped>
</style>
