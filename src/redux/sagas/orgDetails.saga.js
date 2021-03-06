import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchOrgDetails(action) {
  try {
      const response = yield axios.get(`/api/organizations/${action.payload}`)
      console.log('Saga get organization details response:', response.data[0])
      yield put({type: 'SET_ORG_DETAILS', payload: response.data[0]})
  } catch (error) {
      console.log('Error getting organization details', error);  
  }
}

function* orgDetailsSaga() {
  yield takeLatest('FETCH_ORG_DETAILS', fetchOrgDetails);
}

export default orgDetailsSaga;
