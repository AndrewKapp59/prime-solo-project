import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import programsSaga from './programs.saga';
import organizationsSaga from './organizations.saga';
import orgDetailsSaga from './orgDetails.saga'

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga


// function* watcherSaga() {
//   yield takeEvery("FETCH_PROGRAMS", fetchPrograms);
//   yield takeEvery("FETCH_ORGANIZATIONS", fetchOrganizations);
//   yield takeEvery("FETCH_ORG_DETAILS", fetchOrgDetails);
// }

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    programsSaga(),
    organizationsSaga(),
    orgDetailsSaga(),
  ]);
}
