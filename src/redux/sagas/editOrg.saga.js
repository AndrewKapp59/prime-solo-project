
import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* updateOrg(action) {
  try {
      yield axios.put(`/api/organizations/edit/${action.payload.id}`, action.payload.update)
      yield put({type: 'FETCH_ORGANIZATIONS'})
      yield put({type: 'FETCH_ORG_PROFILE', payload: action.payload.id})
  } catch(error) {
      console.log('Error updating organization', error);
  }
}

function* editOrg() {
  yield takeLatest('EDIT_ORG', updateOrg);
}

export default editOrg;
