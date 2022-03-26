import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Favorites from '../Favorites/Favorites';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ProgramsList from '../ProgramsList/ProgramsList';
import ProgramDetails from '../ProgramsList/ProgramDetails';
import OrganizationsList from '../OrganizationsList/OrganizationsList';
import OrganizationDetails from '../OrganizationsList/OrganizationDetails';
import OrganizationProfile from '../OrganizationProfile/OrganizationProfile';
import NewOrganization from '../OrganizationProfile/NewOrganization';
import OrgProgramList from '../ProgramsList/OrgProgramsList';
import CustomRoute from '../CustomRoute/CustomRoute';
import NewProgram from '../ProgramsList/NewProgram';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_PROGRAMS' });
    dispatch({ type: 'FETCH_ORGANIZATIONS' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Box textAlign="center" >
          <Button variant="text" className="nav">
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
              <h2 className="nav-title">Art Rez</h2>
            </Link>
          </Button>
        </Box>

        <Nav />

        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/programs will show the programs page. */}
          <Route
            // shows ProgramsList at all times (logged in or not)
            exact
            path="/programs"
          >
            <ProgramsList />
          </Route>

          <Route
            // shows OrganizationsList at all times (logged in or not)
            exact
            path="/program-details/:name"
          >
            <ProgramDetails />
          </Route>

          {/* Visiting localhost:3000/organizations will show the organizations page. */}
          <Route
            // shows OrganizationsList at all times (logged in or not)
            exact
            path="/organizations"
          >
            <OrganizationsList />
          </Route>

          <Route
            // shows OrganizationsList at all times (logged in or not)
            exact
            path="/organization-details/:id"
          >
            <OrganizationDetails />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/favorites"
          >
            <Favorites />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/new-organization"
          >
            <NewOrganization />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/org-profile"
          >
            <OrganizationProfile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/org-programs"
          >
            <OrgProgramList />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/new-program"
          >
            <NewProgram />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // this goes to the following CustomRoute to determine
              // what type of user it is
              <Redirect to='/user1'/>
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          // from login, has logic to determine next url
          <CustomRoute exact path="/user1">
            <Favorites />
            <OrganizationProfile />
          </CustomRoute>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user2 page

              <Redirect to="/user2" />
            ) : (
              // Otherwise, show the login page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/user2">
            {user.user_type === 'Organization' ? (
              // If the user is an artist,
              // redirect them to the /favorites page
              <Redirect to="/new-organization" />
            ) : (
              // Otherwise, they are an organization
              // redirect them to their profile page
              <Redirect to="/favorites" />
            )}
          </Route>

          <Route exact path="/home">
            <LandingPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
