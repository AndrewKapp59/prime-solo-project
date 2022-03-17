import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* deleteProg(action) {
  try {
    yield axios.delete(`/api/favorites/prog/${action.payload}`);
    yield put({ type: "GET_FAV_PROGS" });
  } catch (error) {
    console.log("Delete Org saga error", error);
  }
}

function* deleteFavProg() {
  yield takeLatest('DELETE_FAV_PROG', deleteProg);
}

export default deleteFavProg;