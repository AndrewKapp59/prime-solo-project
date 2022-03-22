import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* deleteProg(action) {
  try {
    yield axios.delete(`/api/projects/${action.payload}`);
    yield put({ type: "FETCH_PROGRAMS" });
  } catch (error) {
    console.log("Delete project saga error", error);
  }
}

function* deleteFavProg() {
  yield takeLatest('DELETE_PROG', deleteProg);
}

export default deleteProg;