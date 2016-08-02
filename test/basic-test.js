import reduxModule from '../src/index';

const module = reduxModule({
  state: {
    sideNavOpen: false
  },

  reducers: {
    openSideNav: (state, payload) => ({...state, side_nav_open: true }),
    closeSideNav: (state, payload) => ({...state, side_nav_open: false })
  }
});

console.log(module);
