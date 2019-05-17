import BaseComponent from '../BaseComponent/BaseComponent.js';

export class Table extends BaseComponent {
  constructor({ data, element }) {
    super();
    
    this._el = element;
    this._data = data;

    this._render(this._data);

    this._el.addEventListener('click', e => {
      this._onRowClick(e);
    })
  }

  doFilter(text) {
    if (text === "") {
      this._render(this._data);
      return;
    }

    text = text.trim().toLowerCase();
    let filter = this._data.filter(newItem => {
      const item = newItem.name.toLowerCase();
      if (item.includes(text)) return true;
      return false;
    });

    this._render(filter);
  }

  _onRowClick(e) {
    const target = e.target.closest('tbody tr');
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      let rowClickEvent = new CustomEvent('rowClick', {
        detail: { id },
      });
      this._el.dispatchEvent(rowClickEvent);
    }
  }
    
  _render(data) {
    this._el.innerHTML = `
    <table class="data-table highlight"> 
      <thead>
        <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Price</th>
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
