import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgramItem from './ProgramItem';

import Grid from '@mui/material/Grid';



function ProgramList() {
  const dispatch = useDispatch();
  const programs = useSelector(store => store.programs);

  useEffect(() => {
    dispatch({ type: 'FETCH_PROGRAMS' });
  }, []);

  return (
    <div className="container">
      <h3>Programs Page</h3>
      {/* <Grid container spacing={2}>
        {programs.map((program, index) => {
          return (
            <Grid key={index} item xs={2}>
              <ProgramItem key={index} program={program} />
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
}

export default ProgramList;
