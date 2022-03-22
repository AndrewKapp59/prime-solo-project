import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* removeProg(action) {
  try {
    yield axios.delete(`/api/programs/${action.payload}`);
    yield put({ type: "FETCH_PROGRAMS" });
  } catch (error) {
    console.log("Delete project saga error", error);
  }
}

function* deleteProg() {
  yield takeLatest('DELETE_PROG', removeProg);
}

export default deleteProg;