import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* fetchFavProgs() {
  // get all organizations from the DB
  try {
      const response = yield axios.get('/api/favorites/prog');
      // console.log('Saga get response for programs:', response.data);
      yield put({ type: 'LIST_FAV_PROGS', payload: response.data });

  } catch {
      console.log('Error getting fav programs', error);
  }
}

function* getFavProgs() {
  yield takeLatest('GET_FAV_PROGS', fetchFavProgs);
}

export default getFavProgs;