import reduxModule, {
  getReducerFromModule,
  getReducersFromModules,
  getEffectsFromModule,
  getEffectsFromModules,
} from '../src/index';
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

  effects: {
    // dummy function
    handleComplexAsyncFlow: () => ({data: true}),
  },

  actionCreators: {
    toggleSideNavigation: () => ({
      type: 'toggleSideNav'
    })
  }
});

const module2 = reduxModule({
  state: {
    sideNavOpen2: false
  },

  reducers: {
    openSideNav2: (state) => ({...state, sideNavOpen2: true }),
    closeSideNav2: (state) => ({...state, sideNavOpen2: false }),
    toggleSideNav2: (state) => ({...state, sideNavOpen2: !state.sideNavOpen2 }),
  },

  effects: {
    // dummy function
    handleComplexAsyncFlow2: () => ({data: true}),
    handleComplexAsyncFlow3: () => ({data: true}),

  },

  actionCreators: {
    toggleSideNavigation2: () => ({
      type: 'toggleSideNav2'
    })
  }
});

console.log(module);

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
      (module.actions).should.be.an.instanceOf(Object).and.have.properties({ openSideNav: 'openSideNav', closeSideNav: 'closeSideNav', toggleSideNav: 'toggleSideNav' });
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

  describe('Has helper functions', function() {
    it('extract reducer helper function', function() {
      const extractReducer = getReducerFromModule(module);
      (extractReducer).should.be.an.instanceOf(Function);
    });

    it('extract reducers function', function() {
      const extractReducers = getReducersFromModules({ module, module2 });
      (extractReducers).should.be.an.instanceOf(Object);
      for (var key in extractReducers) {
        if (extractReducers.hasOwnProperty(key)) {
          (extractReducers[key]).should.be.an.instanceOf(Function);
        }
      }
    });

    it('extract effects function', function() {
      const extractReducer = getEffectsFromModule(module);
      (extractReducer).should.be.an.instanceOf(Object);
    });

    it('extract effects function from multiple modules', function() {
      const extractReducers = getEffectsFromModules({ module, module2 });
      for (var key in extractReducers) {
        if (extractReducers.hasOwnProperty(key)) {
          (extractReducers[key]).should.be.an.instanceOf(Object);
        }
      }
    });
  });

});
