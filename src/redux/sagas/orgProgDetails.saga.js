import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchOrgProgDetails(action) {
  try {
      const response = yield axios.get(`/api/programs/org/${action.payload}`)
      console.log('Saga got the details for the organization profile response:', response.data[0])
      yield put({type: 'SET_ORG_PROG_DETAILS', payload: response.data[0]})
  } catch (error) {
      console.log('Error getting program details for organization profile', error);  
  }
}

function* orgProgDetails() {
  yield takeLatest('FETCH_ORG_PROG_DETAILS', fetchOrgProgDetails);
}

export default orgProgDetails;