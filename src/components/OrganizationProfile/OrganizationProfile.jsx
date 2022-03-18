import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function OrganizationProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Upon load, get the selected organization profile based on the user id
    dispatch({ type: 'FETCH_ORG_PROFILE', payload: id });
  }, []);

  const org = useSelector((store) => store.orgProfile);
  const user = useSelector((store) => store.user);

  const id = user.id;
  console.log('ID is', id);
  console.log(org);

  const [update, setUpdate] = useState(updateState);

  const updateOrg = (e) => {
    e.preventDefault();
    // Sending dispatch to saga to handle the edit organization function
    dispatch({ type: 'EDIT_ORG', payload: { update, id } });
    setOpen(false); // Close the edit dialog
    setUpdate(updateState); // reset the edit state to default
    // dispatch({ type: 'GET_DETAILS', payload: id }); // Needs to be done to show the updated edits
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    // Opens edit Dialog box.
    setOpen(true);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Typography gutterBottom variant="h6" component="div">
          {org.org_name}
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
          src={org.org_img_url}
        />

        <Button size="small" variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
      </Grid>
      <Typography gutterBottom variant="b1" component="div">
        About:
        <Typography gutterBottom variant="b2" component="div">
          {org.about}
        </Typography>
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Facilities:
        <Typography gutterBottom variant="b2" component="div">
          {org.facilities}
        </Typography>
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Public Programs:
        <Typography gutterBottom variant="b2" component="div">
          {org.public_programs}
        </Typography>
      </Typography>
      <Typography gutterBottom variant="b1" component="div">
        Housing:
        <Typography gutterBottom variant="b2" component="div">
          {org.housing}
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
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDX4e7v69d8lQVeWvBOcs-Bt9mFS2VVogg&q=${org.org_location}`}
          allowFullScreen
        ></iframe>
        <BottomNavigation sx={{ width: 'auto' }}>
          <Link>
            <BottomNavigationAction icon={<InstagramIcon />} />
          </Link>
          <Link href={org.twitter_url}>
            <BottomNavigationAction icon={<TwitterIcon />} />
          </Link>
          <Link href={org.facebook_url}>
            <BottomNavigationAction icon={<FacebookIcon />} />
          </Link>
        </BottomNavigation>
      </Grid>
    </>
  );
}

export default OrganizationProfile;