'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducerFromModule = getReducerFromModule;
exports.getReducersFromModules = getReducersFromModules;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getReducerFromModule(module) {
  return module.reducer;
};

function getReducersFromModules(module) {
  var _this = this;

  return _lodash2.default.reduce(module, function (result, value, key) {
    result[key] = _this.getReducerFromModule(value);
    return result;
  }, {});
};

function reduxModule() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return {
    reducer: function reducer() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? opts.initialState || {} : arguments[0];
      var payload = arguments[1];

      if (opts.reducers[payload.type]) {
        return opts.reducers[payload.type](state, payload);
      } else {
        return state;
      }
    },
    actions: _lodash2.default.reduce(opts.reducers, function (result, value, key) {
      result[key] = key;
      return result;
    }, {}),
    actionCreators: opts.actionCreators || {}
  };
};

exports.default = reduxModule;