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
  return Object.keys(modules).reduce(function (result, key) {
    result[key] = modules[key].reducer;
    return result;
  }, {});
};

function getEffectsFromModule(module) {
  return module.effects;
};

function getEffectsFromModules(modules) {
  return Object.keys(modules).reduce(function (result, key) {
    result[key] = modules[key].effects;
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
    actions: Object.keys(opts.reducers).reduce(function (result, key) {
      result[key] = key;
      return result;
    }, {}),
    actionCreators: opts.actionCreators || {},
    effects: opts.effects || {}
  };
};

exports.default = reduxModule;