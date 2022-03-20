import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function AddOrganization() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const orgState = {
    org_user_id: user.id,
    org_name: '',
    org_location: '',
    org_img_url: '',
    about: '',
    instagram_url: '',
    facebook_url: '',
    twitter_url: '',
  };

  const [newOrg, setNewOrg] = useState(orgState);

  const addOrg = (event) => {
    // If all fields have valid inputs, continue
    if (
      (newOrg.name,
      newOrg.location,
      newOrg.img_url,
      newOrg.about,
      newOrg.instagram_url,
      newOrg.facebook_url,
      newOrg.twitter_url)
    ) {
      event.preventDefault();
      dispatch({ type: 'ADD_ORG', payload: newOrg });
      setNewOrg(orgState);
      history.push('/'); // Go to profile page after entering org info
    } else {
      // If a field is not filled out
      alert('Please fill out all input fields');
    }
  };

  return (
    <>
      <Container sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '500px',
            p: '20px',
          }}
        >
          <FormControl sx={{ width: '100%' }}>
            <Typography variant="h5" sx={{ mb: '25px' }}>
              Add Organization Info
            </Typography>
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              label="Name"
              required
              value={newOrg.org_name}
              onChange={(e) =>
                setNewOrg({ ...newOrg, org_name: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              required
              label="Image URL"
              value={newOrg.org_location}
              onChange={(e) =>
                setNewOrg({ ...newOrg, org_location: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              required
              label="Image URL"
              value={newOrg.img_url}
              onChange={(e) =>
                setNewOrg({ ...newOrg, org_img_url: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              required
              multiline
              rows="5"
              label="About"
              value={newOrg.about}
              onChange={(e) => setNewOrg({ ...newOrg, about: e.target.value })}
            />
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              required
              label="Instagram URL"
              value={newOrg.instagram_url}
              onChange={(e) =>
                setNewOrg({ ...newOrg, instagram_url: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              required
              label="Facebook URL"
              value={newOrg.facebook_url}
              onChange={(e) =>
                setNewOrg({ ...newOrg, facebook_url: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              type="text"
              required
              label="Twitter URL"
              value={newOrg.twitter_url}
              onChange={(e) =>
                setNewOrg({ ...newOrg, twitter_url: e.target.value })
              }
            />
          </FormControl>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              mt: '10px',
            }}
          >
            <Button
              variant="outlined"
              onClick={addOrg}
              sx={{ margin: '10px' }}
            >
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
