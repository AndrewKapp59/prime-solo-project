import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import programsSaga from './programs.saga';
import organizationsSaga from './organizations.saga';
import orgDetailsSaga from './orgDetails.saga'
import progDetailsSaga from './progDetails.saga'
import postFavOrg from './postFavOrg.saga';
import deleteFavOrg from './deleteFavOrg.saga';
import getFavOrgs from './getFavOrgs.saga';
import postFavProg from './postFavProg.saga';
import deleteFavProg from './deleteFavProg.saga';
import getFavProg from './getFavProg.saga';
import orgProfile from './orgProfile';
import editOrg from './editOrg.saga'


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

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
    progDetailsSaga(),
    postFavOrg(),
    deleteFavOrg(),
    getFavOrgs(),
    postFavProg(),
    deleteFavProg(),
    getFavProg(),
    orgProfile(),
    editOrg(),
  ]);
}
