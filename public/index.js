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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./scripts/components/App/App.js":
/*!***************************************!*\
  !*** ./scripts/components/App/App.js ***!
  \***************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Table_Table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Table/Table.js */ "./scripts/components/Table/Table.js");
/* harmony import */ var _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portfolio/Portfolio.js */ "./scripts/components/Portfolio/Portfolio.js");
/* harmony import */ var _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TradeWidget/TradeWidget.js */ "./scripts/components/TradeWidget/TradeWidget.js");
/* harmony import */ var _services_DataService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/DataService.js */ "./scripts/services/DataService.js");






var App =
/*#__PURE__*/
function () {
  function App(_ref) {
    var _this = this;

    var element = _ref.element;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    this._el = element;
    this._userBalance = 10000;

    this._render();

    _services_DataService_js__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrencies(function (data) {
      _this._data = data;

      _this._initTable(_this._data);
    });

    this._initPortfolio();

    this._initTradeWidget();

    this._el.querySelector('#filter').addEventListener('input', function (e) {
      _this._table.doFilter(e.target.value);
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
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
      this._portfolio = new _Portfolio_Portfolio_js__WEBPACK_IMPORTED_MODULE_3__["Portfolio"]({
        element: this._el.querySelector('[data-element="portfolio"]'),
        balance: this._userBalance
      });
    }
  }, {
    key: "_initTradeWidget",
    value: function _initTradeWidget() {
      var _this2 = this;

      this._tradeWidget = new _TradeWidget_TradeWidget_js__WEBPACK_IMPORTED_MODULE_4__["TradeWidget"]({
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

      this._table = new _Table_Table_js__WEBPACK_IMPORTED_MODULE_2__["Table"]({
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

/***/ "./scripts/components/BaseComponent/BaseComponent.js":
/*!***********************************************************!*\
  !*** ./scripts/components/BaseComponent/BaseComponent.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseComponent; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BaseComponent);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BaseComponent, [{
    key: "on",
    value: function on(eventType, callback) {
      this._el.addEventListener(eventType, callback);
    }
  }]);

  return BaseComponent;
}();



/***/ }),

/***/ "./scripts/components/Portfolio/Portfolio.js":
/*!***************************************************!*\
  !*** ./scripts/components/Portfolio/Portfolio.js ***!
  \***************************************************/
/*! exports provided: Portfolio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var Portfolio =
/*#__PURE__*/
function () {
  function Portfolio(_ref) {
    var element = _ref.element,
        balance = _ref.balance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Portfolio);

    this._el = element;
    this._portfolioWorth = 0;
    this._balance = balance;
    this._items = {};

    this._render();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Portfolio, [{
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

/***/ "./scripts/components/Table/Table.js":
/*!*******************************************!*\
  !*** ./scripts/components/Table/Table.js ***!
  \*******************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseComponent/BaseComponent.js */ "./scripts/components/BaseComponent/BaseComponent.js");
/* harmony import */ var _services_DataService_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/DataService.js */ "./scripts/services/DataService.js");







var Table =
/*#__PURE__*/
function (_BaseComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Table, _BaseComponent);

  function Table(_ref) {
    var _this;

    var data = _ref.data,
        element = _ref.element;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Table);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Table).call(this));
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Table, [{
    key: "doFilter",
    value: function doFilter(text) {
      var _this2 = this;

      this._filter = text;
      var arr = _services_DataService_js__WEBPACK_IMPORTED_MODULE_6__["default"].getCurrencies(function (data) {
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
        var arr = _services_DataService_js__WEBPACK_IMPORTED_MODULE_6__["default"].getCurrencies(function (data) {
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
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./scripts/components/TradeWidget/TradeWidget.js":
/*!*******************************************************!*\
  !*** ./scripts/components/TradeWidget/TradeWidget.js ***!
  \*******************************************************/
/*! exports provided: TradeWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeWidget", function() { return TradeWidget; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseComponent/BaseComponent.js */ "./scripts/components/BaseComponent/BaseComponent.js");







function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var TradeWidget =
/*#__PURE__*/
function (_BaseComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(TradeWidget, _BaseComponent);

  function TradeWidget(_ref) {
    var _this;

    var element = _ref.element;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TradeWidget);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TradeWidget).call(this));
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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TradeWidget, [{
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
}(_BaseComponent_BaseComponent_js__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App/App.js */ "./scripts/components/App/App.js");

new _components_App_App_js__WEBPACK_IMPORTED_MODULE_0__["App"]({
  element: document.getElementById('app')
});

/***/ }),

/***/ "./scripts/services/DataService.js":
/*!*****************************************!*\
  !*** ./scripts/services/DataService.js ***!
  \*****************************************/
/*! exports provided: default */
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map