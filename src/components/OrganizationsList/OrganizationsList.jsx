import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrganizationItem from './OrganizationItem';
import useReduxStore from '../../hooks/useReduxStore';

// import './OrganizationsList.css'

import Grid from '@mui/material/Grid';



function OrganizationsList() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  console.log(store.organizations);

  return (
    <>
      <div className="org-list-container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {store.organizations.map((organization, index) => {
            return (
              <Grid key={index} item xs={3}>
                <OrganizationItem key={index} organization={organization} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default OrganizationsList;