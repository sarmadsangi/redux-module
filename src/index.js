export function getReducerFromModule(module) {
  return module.reducer;
};

export function getReducersFromModules(modules) {
  return Object.keys(modules).reduce((result, key) => {
    result[key] = modules[key].reducer;
    return result;
  }, {});
};

export function getEffectsFromModule(module) {
  return module.effects;
};

export function getEffectsFromModules(modules) {
  return Object.keys(modules).reduce((result, key) => {
    result[key] = modules[key].effects;
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
      actions: Object.keys(opts.reducers).reduce((result, key) => {
        result[key] = key;
        return result;
      }, {}),
      actionCreators: opts.actionCreators || {},
      effects: opts.effects || {},
  }
};

export default reduxModule;
