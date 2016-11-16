"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReducerFromModule = getReducerFromModule;
exports.getReducersFromModules = getReducersFromModules;
exports.getEffectsFromModule = getEffectsFromModule;
exports.getEffectsFromModules = getEffectsFromModules;
function getReducerFromModule(module) {
  return module.reducer;
};

function getReducersFromModules(modules) {
  var _this = this;

  return modules.reduce(function (result, value, key) {
    result[key] = _this.getReducerFromModule(value);
    return result;
  }, {});
};

function getEffectsFromModule(module) {
  return module.effects;
};

function getEffectsFromModules(modules) {
  var _this2 = this;

  return modules.reduce(function (result, value, key) {
    result[key] = _this2.getEffectsFromModule(value);
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
    actions: opts.reducers.reduce(function (result, value, key) {
      result[key] = key;
      return result;
    }, {}),
    actionCreators: opts.actionCreators || {},
    effects: opts.effects || {}
  };
};

exports.default = reduxModule;