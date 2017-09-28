# Monkey

About this project

## ReactJS
### Dependencies
```
npm install --save react react-router prop-types react-dom
npm install --save axios moment object-assign toastr material-ui
npm install --save-dev babel-preset-stage-0 babel-preset-env babel-preset-react \
  babel-preset-react-hmre babel-polyfill babel-cli babel-core babel-eslint \
  babel-plugin-transform-object-rest-spread \
  babel-plugin-transform-react-constant-elements \
  babel-plugin-transform-react-remove-prop-types \
  react-hot-loader react-addons-test-utils
```

### Project Architecture
>

*. js/commons <-- shared React components
*. js/components <-- all React components used for end user features
*. js/vendor <-- place for js libraries that cannot be easily imported from node_modules

## Redux
### Dependencies
```
npm install --save redux redux-thunk react-redux react-router-redux
npm install --save-dev redux-immutable-state-invariant
```

### Architecture
*. js/actions
*. js/actions/actionTypes.js
*. js/actions/sthActions.js
*. js/api
*. js/api/sthApi.js <-- ajax calls here
*. js/reducers
*. js/reducers/index.js <-- entry point for Redux reducers, imports all the reducers
*. js/reducers/initialState.js <-- initial state of the store
*. js/reducers/sthReducer.js
*. js/store
*. js/configureStore.js <-- creates the store using reducers and initial states
*. app.js <-- add Provider from react-redux, create the store and populate it.
