# Redux Module

Reduced boilerplate for your redux, inspired from [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux) and personally felt the pain of writing too much boilerplate for simple redux apps.

## Usage

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
