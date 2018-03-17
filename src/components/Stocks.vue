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
    return {
      stocks: [{id: 1}, {id: 2}]
    }
  },
  components: {
    'stock-item': StockItem
  }
}
</script>

<style scoped>
</style>
