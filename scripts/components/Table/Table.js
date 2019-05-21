import BaseComponent from '../BaseComponent/BaseComponent.js';
import DataService from '../../services/DataService.js';

export class Table extends BaseComponent {
  constructor({ data, element }) {
    super();
    
    this._el = element;
    this._data = data;

    this._render(this._data);
    this._sort = 'name';
    this._filter = '';

    this._el.addEventListener('click', e => {
      this._onRowClick(e);
    })
  }

  doFilter(text) {
    this._filter = text;
    const arr = DataService.getCurrencies(data => {
      this._render(data);
    }, this._filter, this._sort);
  }

  _onRowClick(e) {
    const target = e.target.closest('tbody tr');
    
    if (target) {
      const id = target.dataset.id;
      if (id) {
        let rowClickEvent = new CustomEvent('rowClick', {
          detail: { id },
        });
        this._el.dispatchEvent(rowClickEvent);
      }
    } else {
      this._sort = e.target.dataset.sort;
      const arr = DataService.getCurrencies(data => {
        this._render(data);
      }, this._filter, this._sort);
    };    
  }
    
  _render(data) {
    this._el.innerHTML = `
    <table class="data-table highlight"> 
      <thead>
        <tr>
          <th data-sort="name">Name</th>
          <th data-sort="symbol">Symbol</th>
          <th data-sort="rank">Rank</th>
          <th data-sort="price">Price</th>
        </tr>
      </thead>
      <tbody>
        ${
          data.map(coin => `
            <tr data-id="${coin.id}">
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td>${coin.rank}</td>
                <td>${coin.price}</td>
            </tr>
          `).join('')
        }
      </tbody>
    </table>
    `;
  }
}
