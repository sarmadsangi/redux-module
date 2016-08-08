import _ from 'lodash';

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

export function getReducerFromModule(module) {
  return _.reduce(module, (result, value, key) => {
    result[key] = value.reducer;
    return result;
  }, {});
}

export default reduxModule;
