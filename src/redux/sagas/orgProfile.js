import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchOrgProfile(action) {
  try {
      const response = yield axios.get(`/api/organizations/user/${action.payload}`)
      console.log('Saga get organization profile response:', response.data[0])
      yield put({type: 'SET_ORG_PROFILE', payload: response.data[0]})
  } catch (error) {
      console.log('Error getting organization details', error);  
  }
}

function* orgProfile() {
  yield takeLatest('FETCH_ORG_PROFILE', fetchOrgProfile);
}

export default orgProfile;
