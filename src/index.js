import _ from 'lodash';

function reduxModule(opts = {}) {
  return {
      reducer: (state, payload) => {
        opts.reducers[payload.type](state, payload);
      },
      actions: _.reduce(opts.reducers, (result, value, key) => {
        result[key] = key;
        return result;
      }, {}),

  }
};

export default reduxModule;
