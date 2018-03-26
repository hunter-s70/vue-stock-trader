export default {
  state: {
    money: 10000,
    canEndingDay: false,
    stocks: []
  },
  getters: {
    getPortfolioStocks(state, getters) {
      return state.stocks.map(stock => {
        const record = getters.getStocks.find(el => el.id === stock.id);
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: stock.name,
          price: record.price
        };
      })
    },
    getMoney(state) {
      if (state.money > 100000) alert('You win!');
      return state.money;
    },
    getEndingDay(state) {
      return state.canEndingDay;
    }
  },
  mutations: {
    setPortfolioStocks(state, stocks) {
      state.stocks = stocks;
    },
    setMoney(state, money) {
      state.money = money;
    },
    endingDayToggle(state) {
      state.canEndingDay = !state.canEndingDay;
    },
    buyStock(state, {id, name, price, quantity}) {
      const record = state.stocks.find(el => el.id === id);
      if ((price * quantity) > state.money) return;
      if (record) {
        record.quantity += quantity;
      } else {
        state.stocks.push({id, name, price, quantity});
      }
      state.money -= price * quantity;
    },
    sellStock(state, {id, price, quantity}) {
      const record = state.stocks.find(el => el.id === id);
      if (quantity > record.quantity) return;
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
