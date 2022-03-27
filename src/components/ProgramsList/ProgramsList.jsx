import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProgramItem from './ProgramItem';
import useReduxStore from '../../hooks/useReduxStore';

import Grid from '@mui/material/Grid';
import { TextField, Box } from '@mui/material';
import Typography from '@mui/material/Typography';


function ProgramList() {
  const dispatch = useDispatch();
  const store = useReduxStore();

  console.log(store.programs);

  return (
    <>
      <div className="container" >
      <Box textAlign={'center'} sx={{m:2}}>
          <Typography variant="h6"> # of Programs: {store.programs.length}</Typography>
      </Box>
        {/* <Box className="searchPrograms" textAlign="center">
          <TextField
            id="standard-multiline-flexible"
            multiline
            maxRows={5}
            sx={{ color: 'white', mt: 1, mb: 1, width: 325, mb:2 }}
            required
            label="Search"
            color="primary"
            autoComplete="off"
            // onChange={(event) => {addSearch}}
            // value={search}
          />
        </Box> */}
        <Grid
          container
          spacing={2}
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
