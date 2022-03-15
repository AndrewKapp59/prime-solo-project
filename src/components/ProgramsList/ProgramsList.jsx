import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgramItem from './ProgramItem';
import useReduxStore from '../../hooks/useReduxStore';

import Grid from '@mui/material/Grid';



function ProgramList() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  console.log(store.programs);

  return (
    <>
      <div className="container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          {store.programs.map((program, index) => {
            return (
              <Grid key={index} item xs={3}>
                <ProgramItem key={index} program={program} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default ProgramList;
