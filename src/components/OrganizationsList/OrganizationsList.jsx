import React, { useEffect,  } from 'react';
import { useSelector } from 'react-redux';
import OrganizationItem from './OrganizationItem';


import Grid from '@mui/material/Grid';



function OrganizationsList() {
  const organizations = useSelector((store) => store.organizations);

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
          {organizations.map((organization, index) => {
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