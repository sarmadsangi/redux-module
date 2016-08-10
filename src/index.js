import _ from 'lodash';

export function getReducerFromModule(module) {
  return module.reducer;
};

export function getReducersFromModules(module) {
  return _.reduce(module, (result, value, key) => {
    result[key] = this.getReducerFromModule(value);
    return result;
  }, {});
};

function reduxModule(opts = {}) {
  return {
      reducer: (state = opts.initialSate || {}, payload) => {
        if (opts.reducers[payload.type]) {
          return opts.reducers[payload.type](state, payload);
        } else {
          return state;
        }
      },
      actions: _.reduce(opts.reducers, (result, value, key) => {
        result[key] = key;
        return result;
      }, {}),
      actionCreators: opts.actionCreators || {},
  }
};

export default reduxModule;
