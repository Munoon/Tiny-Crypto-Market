const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/today/`;

const DataService = {
  getCurrencies(callback, filter = "", sort = "rank") {
    DataService._sendRequest(COINS_URL)
      .then(response => {
        let data = DataService._filter(response, filter);
        data = DataService._sort(data, sort);
        console.log('ready');

        let urls = data.reduce((acc, item) => {
          const url = getSingleCoinUrl(item.id);
          acc.push(url)
          return acc;
        }, []);

        Promise.all(urls.map(url => DataService._sendRequest(url, true)))
          .then(response => {
            response.forEach((element, index) => {
              // Почему-то в массив иногда попадаеться undefined
              // Поэтому приходиться удалять такие элементы
              if (element !== undefined)
                data[index].price = element.close;
              else
                delete data[index];
            })
          })
          .then(() => callback(data));
      })
  },

  _sendRequest(url, firstElement = false) {
    return fetch(url)
      .then(response => response.json())
      .then(response => {
        if (firstElement) return response[0];
        else return response; 
      });
  },

  _filter(array, text) {
    text = text.trim().toLowerCase();
    return array.filter(item => {
      const itemName = item.name.toLowerCase();
      const itemSymbol = item.symbol.toLowerCase();

      if (itemName === undefined || itemSymbol === undefined) return false;
      if (itemName.includes(text)) return true;
      if (itemSymbol.includes(text)) return true;
      if (text === "") return true;
      return false;
    }).slice(0, 10);
  },

  _sort(array, type) {
    return array.sort((a, b) => {
      let aName = a[type];
      let bName = b[type];

      if (aName > bName) return 1;
      if (bName > aName) return -1;
    })
  }
}

export default DataService;

