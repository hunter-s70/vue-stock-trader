<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Stock Trader</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Portfolio <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stocks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <ul class="navbar-nav mx-2">
        <li class="nav-item">
          <a class="nav-link" href="#">End Day</a>
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
      <strong class="navbar-text">Funds: 12 UAH</strong>
    </div>
  </nav>
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
</style>
