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
    }
  },
  actions: {
    initStocks({commit}) {
      commit('setStocks', data);
    },
    buyStock({commit}, order) {
      console.log(order);
    }
  }
}
