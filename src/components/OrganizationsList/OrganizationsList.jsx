import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrganizationItem from './OrganizationItem';

import Grid from '@mui/material/Grid';
import { TextField, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function OrganizationsList() {
  const organizations = useSelector((store) => store.organizations);

  // organizations.filter(org.org_name => org.org_name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="org-list-container">
        <Box textAlign={'center'} sx={{m:2}}>
          <Typography variant="h6"> # of Organizations: {organizations.length}</Typography>
        </Box>
        {/* <Box className="searchOrganizations" textAlign="center">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={5}
            sx={{ color: 'white', mt: 1, mb: 1, width: 325, mb:2  }}
            required
            label="Search"
            color="primary"
            autoComplete="off"
            onChange={(event) => {addSearch}}
            value={search}
          />
        </Box> */}
        <Grid
          container
          spacing={2}
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
        {/* <Grid
          container
          spacing={2}
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
        </Grid> */}
      </div>
    </>
  );
}

export default OrganizationsList;
