# Armi - Dashboard

Just Do It :)

## Dev Server

```
npm run dev
```

## Tests (not implemented)

```
npm run test:watch
```

## Build Semantic-UI (if needed)
builds the files to
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

## Work log here:

### 26.3.2016

  // this.props.actions.posts_get()
  // this.props.actions.posts_add(content)
  // this.props.actions.posts_update(post_id, )
  // this.props.actions.posts_remove(post_id)

  // this.props.actions.bs_add(value)
  // this.props.actions.bs_remove(bs_value)

  // this.props.home.posts_data <- something :)

### 25.3.2016

Initial codebase.
