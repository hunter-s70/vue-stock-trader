import Vue from 'vue';

export default {
  saveData(data) {
    return new Promise((resolve, reject) => {
      Vue.http.put('data.json', data).then((responce) => {
        resolve(responce);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  loadData() {
    return new Promise((resolve, reject) => {
      Vue.http.get('data.json').then((responce) => responce.json()).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
