# Redux Module ( Proposal )

Reduced boilerplate for your redux, inspired from [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux) and personally felt the pain of writing too much boilerplate for simple redux apps.

## Usage

1. Create Redux Module
```javascript

// sideNav.js
// Simple module that is suppose to open and close SideNavigation (hamburger menu) of an app.

import reduxModule from 'redux-module';

const module = reduxModule({
  initialState: {
    isSideNavOpen: false
  },

  reducers: {
    openSideNav: (state) => ({ ...state, isSideNavOpen: true }),
    closeSideNav: (state) => ({ ...state, isSideNavOpen: false })
  }
});

export default module;
```

2. Use it with combineReducers (if multiple reducers)
```javascript
import { combineReducers } from 'redux';
import { getReducersFromModules } from 'redux-module';

import * as allModules from '/modules/index';

export default combineReducers(getReducersFromModules(allModules));
```

 - Or if you just want to extract reducer from a module
```javascript
import { getReducerFromModule } from 'redux-module';
const reducer = getReducerFromModule(allModules);
```

3. In your Containers/Components use connect the usual way. redux-modules automatically creates key mirroed actions and to use them just extract actions from your modules like below,
```javascript
import { connect } from 'react-redux';
import { actions } from 'mobile/modules/appState';

@connect(state => ({ appState: state.appState }))
class App extends Component {
  render() {
    const { appState, dispatch } = this.props;

    return (
      <div>
        <button onClick={() => dispatch({type: actions.openSideNav})} >Open SideNav</button>
        <SideNavigation isSideNavOpen={appState.isSideNavOpen} />
      </div>
    );
  }
}
```
