/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

new _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__["App"]({
  element: document.getElementById('app')
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _Table_Table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _services_DataService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var App =
/*#__PURE__*/
function () {
  function App(_ref) {
    var _this = this;

    var element = _ref.element;

    _classCallCheck(this, App);

    this._el = element;
    this._userBalance = 10000;

    this._render();

    _services_DataService_js__WEBPACK_IMPORTED_MODULE_3__["default"].getCurrencies(function (data) {
      _this._data = data;

      _this._initTable(_this._data);
    });

    this._initPortfolio();

    this._initTradeWidget();

    this._el.querySelector('#filter').addEventListener('input', function (e) {
      _this._table.doFilter(e.target.value);
    });
  }

  _createClass(App, [{
    key: "tradeItem",
    value: function tradeItem(id) {
      var coin = this._data.find(function (coin) {
        return coin.id === id;
      });

      this._tradeWidget.trade(coin, this._userBalance);
    }
  }, {
    key: "_initPortfolio",
    value: function _initPortfolio() {
      this._portfolio = new _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_1__["Portfolio"]({
        element: this._el.querySelector('[data-element="portfolio"]'),
        balance: this._userBalance
      });
    }
  }, {
    key: "_initTradeWidget",
    value: function _initTradeWidget() {
      var _this2 = this;

      this._tradeWidget = new _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_2__["TradeWidget"]({
        element: this._el.querySelector('[data-element="trade-widget"]')
      });

      this._tradeWidget.on('buy', function (e) {
        var _e$detail = e.detail,
            item = _e$detail.item,
            amount = _e$detail.amount;

        _this2._portfolio.addItem(item, amount);

        _this2._userBalance -= item.price * amount;
      });
    }
  }, {
    key: "_initTable",
    value: function _initTable(data) {
      var _this3 = this;

      this._table = new _Table_Table_js__WEBPACK_IMPORTED_MODULE_0__["Table"]({
        data: data,
        element: this._el.querySelector('[data-element="table"]')
      });

      this._table.on('rowClick', function (e) {
        _this3.tradeItem(e.detail.id);
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      this._el.innerHTML = "\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <h1>Tiny Crypto Market</h1>\n            </div>\n        </div>\n        <div>\n          <form class=\"col s12\">\n            <div class=\"input-field col s4\">\n                <input id=\"filter\" id=\"amount\" type=\"text\" placeholder=\"Filter\">\n            </div>\n          </form>\n        </div>\n        <div class=\"row portfolio-row\">\n          <div class=\"col s6 offset-s6\" data-element=\"portfolio\"></div>\n        </div>\n\n        <div class=\"row\">\n          <div data-element=\"table\" class=\"col s12\"></div>\n        </div>\n        <div data-element=\"trade-widget\"></div>\n    ";
    }
  }]);

  return App;
}();

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _services_DataService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Table =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Table, _BaseComponent);

  function Table(_ref) {
    var _this;

    var data = _ref.data,
        element = _ref.element;

    _classCallCheck(this, Table);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Table).call(this));
    _this._el = element;
    _this._data = data;

    _this._render(_this._data);

    _this._sort = 'name';
    _this._filter = '';

    _this._el.addEventListener('click', function (e) {
      _this._onRowClick(e);
    });

    return _this;
  }

  _createClass(Table, [{
    key: "doFilter",
    value: function doFilter(text) {
      var _this2 = this;

      this._filter = text;
      var arr = _services_DataService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrencies(function (data) {
        _this2._render(data);
      }, this._filter, this._sort);
    }
  }, {
    key: "_onRowClick",
    value: function _onRowClick(e) {
      var _this3 = this;

      var target = e.target.closest('tbody tr');

      if (target) {
        var id = target.dataset.id;

        if (id) {
          var rowClickEvent = new CustomEvent('rowClick', {
            detail: {
              id: id
            }
          });

          this._el.dispatchEvent(rowClickEvent);
        }
      } else {
        this._sort = e.target.dataset.sort;
        var arr = _services_DataService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrencies(function (data) {
          _this3._render(data);
        }, this._filter, this._sort);
      }

      ;
    }
  }, {
    key: "_render",
    value: function _render(data) {
      this._el.innerHTML = "\n    <table class=\"data-table highlight\"> \n      <thead>\n        <tr>\n          <th data-sort=\"name\">Name</th>\n          <th data-sort=\"symbol\">Symbol</th>\n          <th data-sort=\"rank\">Rank</th>\n          <th data-sort=\"price\">Price</th>\n        </tr>\n      </thead>\n      <tbody>\n        ".concat(data.map(function (coin) {
        return "\n            <tr data-id=\"".concat(coin.id, "\">\n                <td>").concat(coin.name, "</td>\n                <td>").concat(coin.symbol, "</td>\n                <td>").concat(coin.rank, "</td>\n                <td>").concat(coin.price, "</td>\n            </tr>\n          ");
      }).join(''), "\n      </tbody>\n    </table>\n    ");
    }
  }]);

  return Table;
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseComponent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent() {
    _classCallCheck(this, BaseComponent);
  }

  _createClass(BaseComponent, [{
    key: "on",
    value: function on(eventType, callback) {
      this._el.addEventListener(eventType, callback);
    }
  }]);

  return BaseComponent;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var COINS_URL = 'https://api.coinpaprika.com/v1/coins';

var getSingleCoinUrl = function getSingleCoinUrl(id) {
  return "https://api.coinpaprika.com/v1/coins/".concat(id, "/ohlcv/today/");
};

var DataService = {
  getCurrencies: function getCurrencies(callback) {
    var filter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var sort = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rank";

    DataService._sendRequest(COINS_URL).then(function (response) {
      var data = DataService._filter(response, filter);

      data = DataService._sort(data, sort);
      console.log('ready');
      var urls = data.reduce(function (acc, item) {
        var url = getSingleCoinUrl(item.id);
        acc.push(url);
        return acc;
      }, []);
      Promise.all(urls.map(function (url) {
        return DataService._sendRequest(url, true);
      })).then(function (response) {
        response.forEach(function (element, index) {
          // Почему-то в массив иногда попадаеться undefined
          // Поэтому приходиться удалять такие элементы
          if (element !== undefined) data[index].price = element.close;else delete data[index];
        });
      }).then(function () {
        return callback(data);
      });
    });
  },
  _sendRequest: function _sendRequest(url) {
    var firstElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (response) {
      if (firstElement) return response[0];else return response;
    });
  },
  _filter: function _filter(array, text) {
    text = text.trim().toLowerCase();
    return array.filter(function (item) {
      var itemName = item.name.toLowerCase();
      var itemSymbol = item.symbol.toLowerCase();
      if (itemName === undefined || itemSymbol === undefined) return false;
      if (itemName.includes(text)) return true;
      if (itemSymbol.includes(text)) return true;
      if (text === "") return true;
      return false;
    }).slice(0, 10);
  },
  _sort: function _sort(array, type) {
    return array.sort(function (a, b) {
      var aName = a[type];
      var bName = b[type];
      if (aName > bName) return 1;
      if (bName > aName) return -1;
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DataService);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Portfolio =
/*#__PURE__*/
function () {
  function Portfolio(_ref) {
    var element = _ref.element,
        balance = _ref.balance;

    _classCallCheck(this, Portfolio);

    this._el = element;
    this._portfolioWorth = 0;
    this._balance = balance;
    this._items = {};

    this._render();
  }

  _createClass(Portfolio, [{
    key: "addItem",
    value: function addItem(item, amount) {
      var currentItem = this._items[item.id] || {
        name: item.name,
        id: item.id,
        amount: 0,
        total: 0
      };
      currentItem.price = item.price;
      currentItem.amount = currentItem.amount + amount;
      currentItem.total = currentItem.price * currentItem.amount;
      this._items[item.id] = currentItem;
      var purchasePrice = item.price * amount;
      this._balance -= purchasePrice;
      this._portfolioWorth = Object.values(this._items).reduce(function (total, item) {
        return total + item.total;
      }, 0);

      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var items = Object.values(this._items);
      this._el.innerHTML = "\n            <ul class=\"collapsible portfolio\">\n              <li>\n                <p class=\"collapsible-header\">\n                    Current balance: ".concat(this._balance.toFixed(2), ".\n                    Portfolio Worth: ").concat(this._portfolioWorth.toFixed(2), "\n                </p>\n                <div class=\"collapsible-body\">\n                ").concat(items.length === 0 ? 'There is nothing yet!' : "\n                    <table class=\"highlight striped\"> \n                      <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Amount</th>\n                            <th>Price</th>\n                            <th>Total</th>\n                        </tr>\n                      </thead>\n              \n                      <tbody>\n                          ".concat(items.map(function (item) {
        return "\n                            <tr data-id=\"".concat(item.id, "\">\n                                <td>").concat(item.name, "</td>\n                                <td>").concat(item.amount, "</td>\n                                <td>").concat(item.price, "</td>\n                                <td>").concat(item.total, "</td>\n                            </tr>\n                          ");
      }).join(''), "\n                      </tbody>\n                  </table>\n                    "), "\n      \n                </div>\n              </li>\n            </ul>\n      ");
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems);
    }
  }]);

  return Portfolio;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeWidget", function() { return TradeWidget; });
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var TradeWidget =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(TradeWidget, _BaseComponent);

  function TradeWidget(_ref) {
    var _this;

    var element = _ref.element;

    _classCallCheck(this, TradeWidget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TradeWidget).call(this));
    _this._el = element;

    _this._el.addEventListener('input', function (e) {
      if (!e.target.closest('#amount')) return;
      var value = +e.target.value;

      _this._updateDisplay(value);
    });

    _this._el.addEventListener('click', function (e) {
      if (e.target.closest('[data-id="cancel"]')) {
        _this.close();
      }

      if (e.target.closest('[data-id="buy"]')) {
        var buyEvent = new CustomEvent('buy', {
          detail: {
            amount: +_this._el.querySelector('#amount').value,
            item: _this._currentItem
          }
        });

        _this._el.dispatchEvent(buyEvent);

        _this.close();
      }
    });

    _this._el.addEventListener('keydown', function (e) {
      if (!e.target.closest('#amount')) return;
      var key = e.key;
      var value = +e.target.value + +key;

      if (e.target.value.includes('.') && key === '.') {
        e.preventDefault();
      } else if (!isNumeric(key) && key !== 'Backspace' && key != '.') {
        e.preventDefault();
      }

      if (_this._balance - _this._currentItem.price * value < 0) {
        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(TradeWidget, [{
    key: "trade",
    value: function trade(item, balance) {
      this._currentItem = item;
      this._total = 0;
      this._balance = balance;

      this._render(item);
    }
  }, {
    key: "close",
    value: function close() {
      this._el.querySelector('.modal').classList.remove('open');
    }
  }, {
    key: "_updateDisplay",
    value: function _updateDisplay(value) {
      this._totalEl = this._el.querySelector('#item-total');
      this._totalEl.textContent = (this._currentItem.price * value).toFixed(2);
    }
  }, {
    key: "_render",
    value: function _render(item) {
      this._el.innerHTML = "  \n    <div id=\"modal\" class=\"modal open\">\n      <div class=\"modal-content\">\n        <h4>Buying ".concat(item.name, ":</h4>\n        <p>\n          Current price: ").concat(item.price, ". \n          Total: <span id=\"item-total\">").concat(this._total, "</span>\n        </p>\n\n        <div class=\"row\">\n          <form class=\"col s12\">\n              <div class=\"input-field col s4\">\n                  <input id=\"amount\" type=\"text\">\n                  <label for=\"amount\">Amount</label>\n              </div>\n          </form>\n        </div>\n\n        <div class=\"modal-footer\">\n          <a href=\"#!\" data-id=\"buy\" class=\"modal-close waves-effect waves-teal btn-flat\">Buy</a>\n          <a href=\"#!\" data-id=\"cancel\" class=\"modal-close waves-effect waves-teal btn-flat\">Cancel</a>\n        </div>\n    </div>\n    </div>\n    ");
    }
  }]);

  return TradeWidget;
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(8);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(10)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(false);
// Module
exports.push([module.i, "body {\r\n    background: green\r\n}", ""]);



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map