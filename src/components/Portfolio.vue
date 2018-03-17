<template>
  <div class="row">
    <div class="col-md-6 mb-4">
      <div class="card text-left">
        <h3 class="card-header bg-blue">BMW&nbsp;<small class="text-muted">(price: 200 | quantity: 10)</small></h3>
        <div class="card-block d-flex justify-content-between align-items-start">
          <div class="form-group w-50 m-0">
            <input type="text" class="form-control" id="quantity" placeholder="Quantity">
          </div>
          <a href="#" class="btn btn-danger">Sell</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .bg-blue {
    background-color: #d8e3ff;
  }
</style>
