export function getReducerFromModule(module) {
  return module.reducer;
};

export function getReducersFromModules(modules) {
  return reduce(modules, (result, value, key) => {
    result[key] = this.getReducerFromModule(value);
    return result;
  }, {});
};

export function getEffectsFromModule(module) {
  return module.effects;
};

export function getEffectsFromModules(modules) {
  return reduce(modules, (result, value, key) => {
    result[key] = this.getEffectsFromModule(value);
    return result;
  }, {});
};

function reduxModule(opts = {}) {
  return {
      reducer: (state = opts.initialState || {}, payload) => {
        if (opts.reducers[payload.type]) {
          return opts.reducers[payload.type](state, payload);
        } else {
          return state;
        }
      },
      actions: reduce(opts.reducers, (result, value, key) => {
        result[key] = key;
        return result;
      }, {}),
      actionCreators: opts.actionCreators || {},
      effects: opts.effects || {},
  }
};

export default reduxModule;
