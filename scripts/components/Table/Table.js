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
    if (!target) {
      this._sortTable(e);
      return;
    };

    const id = target.dataset.id;
    if (id) {
      let rowClickEvent = new CustomEvent('rowClick', {
        detail: { id },
      });
      this._el.dispatchEvent(rowClickEvent);
    }
  }

  _sortTable(e) {
    const type = e.target.dataset.type;
    const index = e.target.cellIndex;
    const tbody = this._el.querySelector('tbody');
    const childers = tbody.querySelectorAll('tr');
    let childersArr = Array.from(childers);

    if (type === 'string') {
      childersArr.sort((a, b) => {
        let aWord = a.children[index].textContent.toLowerCase();
        let bWord = b.children[index].textContent.toLowerCase();

        if (aWord > bWord) return 1;
        if (bWord > aWord) return -1;
      });
    } 
    if (type === 'number') {
      childersArr.sort((a, b) => {
        let aNum = +a.children[index].textContent;
        let bNum = +b.children[index].textContent;

        if (aNum > bNum) return 1;
        if (bNum > aNum) return -1;
      });
    }
    
    /*
      До этого я просто удалял весь tbody таблицы и добавлял туда новые элементы

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
      for (let i = 0; i < childersArr.length; i++) {
        tbody.append(childersArr[i]);
      }
    */

    // Сейчас я решил просто перересовать таблицу
    this._render(childersArr.map(item => {
      return {
        id: item.dataset.id,
        name: item.children[0].textContent,
        symbol: item.children[1].textContent,
        rank: item.children[2].textContent,
        price: item.children[3].textContent
      }
    }));
  }
    
  _render(data) {
    this._el.innerHTML = `
    <table class="data-table highlight"> 
      <thead>
        <tr>
          <th data-type="string">Name</th>
          <th data-type="string">Symbol</th>
          <th data-type="number">Rank</th>
          <th data-type="number">Price</th>
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
