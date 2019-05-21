const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/today/`;

const DataService = {
  getCurrencies(callback) {
    DataService._sendRequest(COINS_URL)
      .then(response => {
        const data = response.slice(0, 10);
        let urls = data.reduce((acc, item) => {
          const url = getSingleCoinUrl(item.id);
          acc.push(url)
          return acc;
        }, []);

        Promise.all(urls.map(url => DataService._sendRequest(url, true)))
          .then(response => {
            response.forEach((element, index) => {
              data[index].price = element.close;
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
  }
}

export default DataService;

