import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import $ajax from '@/api/requests'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    stocks,
    portfolio
  },
  actions: {
    // eslint-disable-next-line
    saveData({commit}, data) {
      $ajax.saveData(data);
    },
    loadData({commit}) {
      $ajax.loadData()
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
