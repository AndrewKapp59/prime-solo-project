import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* addProg(action) {
  try {
    yield axios.post('/api/programs/new', action.payload);
    // yield put({type: 'FETCH_ORGANIZATIONS'})
  }
  catch (error) {
    console.log('Error POSTing new Prog', error);
  }
}

function* newProgSaga() {
  yield takeLatest('POST_NEW_PROG', addProg);
}

export default newProgSaga;