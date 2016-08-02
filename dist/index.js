'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reduxModule() {
  var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return {
    reducer: function reducer() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? opts.state || {} : arguments[0];
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
    }, {})

  };
};

exports.default = reduxModule;