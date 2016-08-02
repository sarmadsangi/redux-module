import _ from 'lodash';

function reduxModule(opts = {}) {
  return {
      reducer: (state = opts.state || {}, payload) => {
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

  }
};

export default reduxModule;
