const COINS_URL = 'https://api.coinpaprika.com/v1/coins';

const getSingleCoinUrl = id => `https://api.coinpaprika.com/v1/coins/${id}/ohlcv/today/`;

const DataService = {
  getCurrencies(callback) {
    fetch(COINS_URL)
      .then(response => {
        return response.json();
      })
      .then(getData => {
        const data = getData.slice(0, 10);
        let lengh = data.length;

        data.forEach(element => {
          const url = getSingleCoinUrl(element.id);
          fetch(url).then(resp => resp.json())
            .then(getData => {
              element.price = +getData[0].open.toFixed(2);
              lengh--;

              if (!lengh) {
                callback(data);
              }
            });
        });
      })
      .catch(exception => {
        alert(exception);
      });
  }
}

export default DataService;

