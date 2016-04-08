# Worklog

### 8.4.2016

- Journal was getting bloated, so made Forms component, which handles all adding and updating. Kinda messy code right now, but it should be better once everything finds its place :)


### 7.4.2016

Agenda: Journal delete button working ;) 2min and done, but user experience sucks... Clicking the button takes some hundred ms to respond, and user gets no feedback immediately after click. low prior task to fix this :) AAAAAND mobile not tested at all, tho this project is not build for mobile (yet) at least...

- Created new BloodPressure Component


### 6.4.2016

- @pitkane Imported LiveTime container from another project :)

- @pitkane Journal styling

- @pitkane Added styling all around, lot's of work to do.

### 5.4.2016

- Added "Notes" module (CREATE, READ and DELETE) possible. Same kinda actions as Blood sugar has.

- Renamed Home actions to Journal. Home is container component as it should be.

TODO: Module stuff? Import React Clock from other project. UPDATE for Journal and Notes.

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
