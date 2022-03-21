import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* addOrg(action) {
  try {
    yield axios.post('/api/organizations/new', action.payload);
    // yield put({type: 'FETCH_ORGANIZATIONS'})
  }
  catch (error) {
    console.log('Error POSTing new Org', error);
  }
}

function* newOrgSaga() {
  yield takeLatest('POST_NEW_ORG', addOrg);
}

export default newOrgSaga;