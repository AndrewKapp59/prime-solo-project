import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* deleteOrg(action) {
  try {
    yield axios.delete(`/api/favorites/${action.payload}`);
    // yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log("delete Org saga error", error);
  }
}

function* deleteFavOrg() {
  yield takeLatest('DELETE_FAV_ORG', deleteOrg);
}

export default deleteFavOrg;