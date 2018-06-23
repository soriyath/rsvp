# The Monkey App

> Fake RSVP app to learn ReactJS

## Recommended environment

I suggest you work with [Atom IDE](https://atom.io/) and the [Nuclide package](https://nuclide.io).<br />
Once Atom is installed, you can use the CLI to install Nuclide with `apm install nuclide`.

For a better debugging experience, you may want to use Chrome with the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).

## Run the project

In a terminal, run :

```
npm install
npm start
```

and go to http://localhost:5000 (or whatever port the terminal instructs you) with your favorite browser.

## Project Architecture

React suggest to differentiate Presentational component (aka dumb components), container components (aka smart components) and higher-order components (components that receive components as parameters or return components)

We favor here a simpler approach. Your project can always evolve and adopt an approach with more isolation between components and component types.

My belief is that the structure of the project should not come in the way of learning the technology or bring value to the end users.

```
.
├── LICENSE
├── README.md
├── i18n
│   ├── en-US.properties
│   └── zh-CN.properties
├── index.html
├── karma.config.js
├── node_modules                  # project dependencies (not listed)
├── package-lock.json
├── package.json
├── scripts
│   ├── intl-helper.js
│   └── release.js
├── server.js
├── src
│   ├── App.js
│   ├── commons                   # shared React component
│   ├── components                # all React components used for end user features
│   │   ├── Footer.js
│   │   ├── ListEvents.js
│   │   ├── Navbar.js
│   │   ├── menu.js
│   │   └── styles.scss
│   ├── index.js
│   ├── polyfills.js
│   ├── styles.scss
│   └── utils.js
├── test
│   ├── components
│   ├── fixtures
│   └── test.bundle.js
├── webpack.config.base.js
├── webpack.config.js
└── webpack.config.karma.js
```

## Troubleshooting

### Node-gyp (only on Windows)
If node-gyp fails to install on windows, see https://github.com/nodejs/node-gyp

**TL;DR** as administrator, run:
```
npm install --global --production windows-build-tools
npm install --global --production node-gyp
```
