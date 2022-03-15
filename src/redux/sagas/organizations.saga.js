import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* fetchOrganizations() {
  // get all organizations from the DB
  try {
      const response = yield axios.get('/api/organizations');
      // console.log('Saga get response for programs:', response.data);
      yield put({ type: 'LIST_ORGANIZATIONS', payload: response.data });

  } catch {
      console.log('Error getting all the organizations', error);
  }
}

function* organizationsSaga() {
  yield takeLatest('FETCH_ORGANIZATIONS', fetchOrganizations);
}

export default organizationsSaga;