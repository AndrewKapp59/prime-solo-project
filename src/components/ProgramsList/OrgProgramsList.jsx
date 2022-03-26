import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrgProgramItem from './OrgProgramItem';
import useReduxStore from '../../hooks/useReduxStore';

import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';

function OrgProgramList() {
  const dispatch = useDispatch();

  const programs = useSelector((store) => store.programs);
  const user = useSelector((store) => store.user);

  const orgPrograms = programs.filter(programs => programs.org_user_id === user.id)

  return (
    <>
      <div className="container">
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {orgPrograms.map((program, index) => {
            return (
              <Grid key={index} item xs={3}>
                <OrgProgramItem key={index} program={program} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default OrgProgramList;