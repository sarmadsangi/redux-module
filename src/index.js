function reduxModule(opts = {}) {
  return (state, payload) => {
    opts.reducer[payload.type](state, payload);
  };
}
export default reduxModule;
