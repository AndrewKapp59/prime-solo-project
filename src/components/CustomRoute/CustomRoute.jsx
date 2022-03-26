import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import { useSelector } from 'react-redux';

// Determines the type of user and based on that, redirects to the 
// proper url, which goes back to the Routing in App.js

function CustomRoute({ component, children, ...props }) {
  const user = useSelector((store) => store.user);

  // Component may be passed in as a "component" prop,
  // or as a child component.
  const ProtectedComponent = component || (() => children);

  console.log('Protected Component:', ProtectedComponent);

  // We return a Route component that gets added to our list of routes
  return (
    <Route
      // all props like 'exact' and 'path' that were passed in
      // are now passed along to the 'Route' Component
      {...props}
    >
      
      {user.user_type === 'Artist' && (
        // If the user is an Artist,
        // redirect to 
        <Redirect to="/favorites" />
      )}
      {user.user_type === 'Organization' && (
        
        // If the user is an Organization,
        // redirect to 
        <Redirect to="/org-profile" />
      )}
    </Route>
  );
}

export default CustomRoute;
