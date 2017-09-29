# The Monkey App
> uses yeoman generator https://github.com/jeantimex/generator-react-webpack-scaffold
About this project

TODO detail yeoman howto
TODO add explanations about flow and apm install flow
TODO add chrome extension react devtools & redux dev tools

## ReactJS

### Dependencies

#### Only on Windows
> if node-gyp fails to install on windows, see https://github.com/nodejs/node-gyp

**TL;DR** as administrator, run:
```
npm install --global --production windows-build-tools
npm install --global --production node-gyp
```

#### OS X / Linux / Windows
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

#### Flow
```
npm install --global flow-bin
```

##### Atom integration
On Windows, run this in MS-DOS CLI as administrator:

```
apm install autocomplete-flow
```

Choose one of the following
```
apm install nuclide
apm install flow-ide
apm install linter-flow
```

##### Atom integration
Windows, run this in MS-DOS CLI as administrator:

```
apm install autocomplete-flow
```

Do one of the following:
```
apm install nuclide
```

### Project Architecture
>

* js/commons <-- shared React components
* js/components <-- all React components used for end user features
* js/vendor <-- place for js libraries that cannot be easily imported from node_modules

### Some references
* https://code.facebook.com/videos/786462671439502/react-js-conf-2015-keynote-introducing-react-native-/
* http://ionicframework.com/ (angular 4 / ionic 2)

## Redux
### Dependencies

```
npm install --save redux redux-thunk react-redux react-router-redux
npm install --save-dev redux-immutable-state-invariant redux-devtools
```

### Architecture

* js/actions
* js/actions/actionTypes.js
* js/actions/sthActions.js
* js/api
* js/api/sthApi.js <-- ajax calls here
* js/reducers
* js/reducers/index.js <-- entry point for Redux reducers, imports all the reducers
* js/reducers/initialState.js <-- initial state of the store
* js/reducers/sthReducer.js
* js/store
* js/configureStore.js <-- creates the store using reducers and initial states
* app.js <-- add Provider from react-redux, create the store and populate it.
