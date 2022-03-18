import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrganizationItem from './OrganizationItem';

import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';

function OrganizationsList() {
  const organizations = useSelector((store) => store.organizations);

  return (
    <>
      <div className="org-list-container">
        <div className="searchPrograms">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={5}
            sx={{ color: 'white', mt: 1, mb: 1, width: 355 }}
            required
            label="Search"
            color="primary"
            autoComplete="off"
            // onChange={(event) => {addSearch}}
            // value={search}
          />
        </div>
        <Grid
          container
          spacing={1}
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
