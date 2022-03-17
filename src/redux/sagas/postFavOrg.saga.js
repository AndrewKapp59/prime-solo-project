import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* addFavOrg(action) {
  try {
    yield axios.post('/api/favorites/org', action.payload);
  }
  catch (error) {
    console.log('Error POSTing fav org', error);
  }
}

function* favOrganizationsSaga() {
  yield takeLatest('POST_FAV_ORG', addFavOrg);
}

export default favOrganizationsSaga;

