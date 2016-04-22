# Armi - Dashboard

![Armi - Dashboard](https://drive.google.com/uc?export=download&id=0BwWdduICTQArbDlwNVd0aW9Rd2c)

Short presentation: [MP4 1080p [1:10]](https://drive.google.com/file/d/0BwWdduICTQArMGxWM3BkSklUaU0/view?usp=sharing)

Todo: insert about section here. Redux and promise based async actions to Parse etc etc...Write them before you forget ;)

- TODO: building semantic, kinda sucks...
-

## Dev Server

```
npm run dev
```

## Tests (not implemented)

```
npm run test:watch
```

## Build Semantic-UI (if needed)
Builds the files to: (Gulb is not used anywhere else)
lib/semantic/dist/semantic.min.css
lib/semantic/dist/semantic.min.js

```
cd lib/semantic
gulp build
```

## config.js
```
// Hold application secrets and config

const appPort = 3001;
const appIP = '127.0.0.1';
const appURL = `http://${appIP}:${appPort}`

module.exports = {
  appId: '',
  masterKey: '',
  appPort: appPort,
  appIP: appIP,
  appURL: appURL,
  parseURL: '' // CHANGE THIS ON DEV/PROD
};
```

## Tech

- React
- Redux (redux-thunk)
- Semantic-UI

## Work log here: (link)
