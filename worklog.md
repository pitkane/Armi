# Worklog

### 5.4.2016

- Added Blood Sugar tracking functionality

Actions:
- export bs_read() -> Promise
- export bs_create(value, food = false) -> Promise
- export bs_delete(bs_id) -> Promise

- bsRequestData() type: BS_REQUEST_DATA
- bsReceiveData(): type: BS_RECEIVE_DATA, data: json
- bsReceiveError(): type: BS_ERROR, data: json

Aaaaand corresponding reducers. Not nicest, but gets the work done ;)

someday todo: Fix inconsistent action creators

Created BloodSugar container, and added some basic loading and rendering stuff.


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