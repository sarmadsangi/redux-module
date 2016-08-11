import reduxModule from '../src/index';
import should from 'should';

const module = reduxModule({
  state: {
    sideNavOpen: false
  },

  reducers: {
    openSideNav: (state) => ({...state, sideNavOpen: true }),
    closeSideNav: (state) => ({...state, sideNavOpen: false }),
    toggleSideNav: (state) => ({...state, sideNavOpen: !state.sideNavOpen }),
  },

  actionCreators: {
    toggleSideNavigation: () => ({
      type: 'toggleSideNav'
    })
  }
});

describe('Module is a valid redux-module', function() {

  describe('Has a reducer', function() {
    it('module object contains reducer property', function() {
      (module).should.have.property('reducer');
    });

    it('reducer is a function', function() {
      (module.reducer).should.be.an.instanceOf(Function);
    });
  });

  describe('Has actions', function() {
    it('module object contains actions property', function() {
      (module).should.have.property('actions');
    });

    it('actions property is a key value mirrored associative array', function() {
      (module.actions).should.be.an.instanceOf(Object).and.have.properties({ openSideNav: 'openSideNav', closeSideNav: 'closeSideNav' });
    });
  });

  describe('Has actionCreators', function() {
    it('module object contains actionCreators property', function() {
      (module).should.have.property('actionCreators');
    });

    it('actionCreators has actionCreator functions', function() {
      (module.actionCreators).should.be.an.instanceOf(Object).and.have.property('toggleSideNavigation');
      (module.actionCreators.toggleSideNavigation).should.be.an.instanceOf(Function);
    });
  });

});
