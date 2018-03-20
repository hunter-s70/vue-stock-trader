export default {
  state: {
    money: 10000,
    stocks: []
  },
  getters: {
    getPortfolioStocks(state) {
      return state.stocks;
    },
    getMoney(state) {
      return state.money;
    }
  },
  mutations: {
    buyStock(state, {id, name, price, quantity}) {
      const record = state.stocks.find(el => el.id === id);
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({id, name, price, quantity});
      }
      state.money -= price * quantity;
    },
    sellStock(state, {id, price, quantity}) {
      const record = state.stocks.find(el => el.id === id);
      if (record.quantity > quantity) {
        record.quantity -= quantity;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.money += price * quantity;
    }
  },
  actions: {
    sellStock({commit}, order) {
      commit('sellStock', order);
    }
  }
}
