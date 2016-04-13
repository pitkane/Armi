# Armi - Dashboard

![Armi - Dashboard](https://drive.google.com/uc?export=download&id=0BwWdduICTQArbDlwNVd0aW9Rd2c)

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

// Hold application secrets and config

```js
module.exports = {
  parseID: '',
  parseJS: '',
  secret: ''
};
```

## Tech

- React
- Redux (redux-thunk)
- Semantic-UI

## Work log here: (link)
