import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* updateProg(action) {
  // console.log(action.payload.name);
  try {
      yield axios.put(`/api/programs/edit/${action.payload.name}`, action.payload.update)
      // yield put({type: 'FETCH_PROGRAMS'})
  } catch(error) {
      console.log('Error updating program', error);
  }
}

function* editProg() {
  yield takeLatest('EDIT_PROG', updateProg);
}

export default editProg;
