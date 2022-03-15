import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

function* fetchProgDetails(action) {
  try {
      const response = yield axios.get(`/api/programs/${action.payload}`)
      console.log('Saga get program details response:', response.data)
      yield put({type: 'SET_PROG_DETAILS', payload: response.data[0]})
  } catch (error) {
      console.log('Error getting program details', error);  
  }
}

function* progDetailsSaga() {
  yield takeLatest('FETCH_PROG_DETAILS', fetchProgDetails);
}

export default progDetailsSaga;
