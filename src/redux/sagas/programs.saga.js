import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* fetchPrograms() {
  // get all programs from the DB
  try {
      const response = yield axios.get('/api/programs');
      console.log('Saga get response for programs:', response.data);
      yield put({ type: 'LIST_PROGRAMS', payload: response.data });

  } catch {
      console.log('Error getting all the programs', error);
  }
}

function* programsSaga() {
  yield takeLatest('FETCH_PROGRAMS', fetchPrograms);
}

export default programsSaga;