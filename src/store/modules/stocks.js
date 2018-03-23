import data from '../../data/stocks'

export default {
  state: {
    stocks: []
  },
  getters: {
    getStocks(state) {
      return state.stocks;
    }
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
    setRandomPrice(state) {
      state.stocks.forEach((item) => {
        item.price = Math.floor(205 + Math.random() * 696);
      });
    }
  },
  actions: {
    initStocks({commit}) {
      commit('setStocks', data);
    },
    buyStock({commit}, order) {
      commit('buyStock', order);
    }
  }
}
