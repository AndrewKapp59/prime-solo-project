import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function ProgramDetails() {
  // const org = useSelector((store) => store.selectedOrganization);
  const dispatch = useDispatch();
  const { name } = useParams();

  console.log('ID is', name);

  useEffect(() => {
    // Upon load, get the selected program details based on the params id
    dispatch({ type: 'FETCH_PROG_DETAILS', payload: name });
  }, []);

  const prog = useSelector(store => store.progDetails);

  console.log(prog);

  return (
    <>
      <Grid container justifyContent="center">
        <Typography gutterBottom variant="h6" component="div">
          {prog.prog_name}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 'auto',
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt=""
          src={prog.prog_img_url}
        />
      </Grid>
      <Typography gutterBottom variant="b1" component="div">
        Application Deadline: {new Date(prog.deadline).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Funding: ${prog.funding_amount}
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Costs: ${prog.cost_amount}
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        About:
        <Typography gutterBottom variant="b2" component="div">
          {prog.description}
        </Typography>
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Facilities:
        <Typography gutterBottom variant="b2" component="div">
          {prog.facilities}
        </Typography>
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Location:
      </Typography>
      <Grid container justifyContent="center">
        <iframe
          width="300"
          height="200"
          frameBorder={0}
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDX4e7v69d8lQVeWvBOcs-Bt9mFS2VVogg&zoom=12&q=${prog.prog_location}`}
          allowFullScreen
        ></iframe>
      </Grid>
      <Box textAlign="center" sx={{mt:1}}>
        <Button size="small" variant="outlined">
          <Link href={prog.app_url}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            Apply
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default ProgramDetails;
