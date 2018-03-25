import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  },
  actions: {
    // eslint-disable-next-line
    saveData({commit}, data) {
      Vue.http.put('data.json', data);
    },
    loadData({commit}) {
      Vue.http.get('data.json')
        .then(responce => responce.json())
        .then(data => {
          if (data) {
            commit('setStocks', data.allStocks);
            commit('setPortfolioStocks', data.portfolioStocks);
            commit('setMoney', data.money);
          }
        });
    }
  }
})
