import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import programs from './programs.reducer'
import organizations from './organizations.reducer'
import orgDetails from './orgDetails.reducer'
import progDetails from './progDetails.reducer'
import favOrgs from './favOrgs.reducer';
import favProgs from './favProgs.reducer';
import orgProfile from './orgProfile.reducer';
import orgProgDetails from './orgProgDetails.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  programs,
  organizations,
  orgDetails,
  progDetails,
  favOrgs,
  favProgs,
  orgProfile,
  orgProgDetails
});

export default rootReducer;
