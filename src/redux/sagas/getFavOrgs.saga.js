import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* fetchFavOrgs() {
  // get all organizations from the DB
  try {
      const response = yield axios.get('/api/favorites/org');
      // console.log('Saga get response for programs:', response.data);
      yield put({ type: 'LIST_FAV_ORGS', payload: response.data });

  } catch {
      console.log('Error getting fav organizations', error);
  }
}

function* getFavOrgs() {
  yield takeLatest('GET_FAV_ORGS', fetchFavOrgs);
}

export default getFavOrgs;