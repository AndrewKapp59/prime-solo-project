import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* addFavProg(action) {
  try {
    console.log('FAV_PROG_POST', action.payload);
    
    yield axios.post('/api/favorites/prog', action.payload);
  }
  catch (error) {
    console.log('Error POSTing fav prog', error);
  }
}

function* favProgramsSaga() {
  yield takeLatest('POST_FAV_PROG', addFavProg);
}

export default favProgramsSaga;