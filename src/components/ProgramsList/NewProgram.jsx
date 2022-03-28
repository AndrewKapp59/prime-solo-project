import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, TextField, Button, FormControl } from '@mui/material';

function NewProgram() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const progState = {
    org_id: user.id,
    prog_name: '',
    prog_location: '',
    prog_img_url: '',
    description: '',
    start_date: '',
    end_date: '',
    deadline: '',
    app_url: '',
    funding_amount: '',
    cost_amount: '',
    housing: '',
    meals: '',
    accessibility: '',
    public_programs: '',
    discipline: '',
    facilities: '',
  };

  const [newProg, setNewProg] = useState(progState);

  const addProg = (event) => {
    // If all fields have valid inputs, continue
    if (
      (newProg.name,
      newProg.location,
      newProg.prog_img_url,
      newProg.description,
      newProg.start_date,
      newProg.end_date,
      newProg.deadline,
      newProg.app_url,
      newProg.funding_amount,
      newProg.cost_amount,
      newProg.housing,
      newProg.meals,
      newProg.accessibility,
      newProg.public_programs,
      newProg.discipline,
      newProg.facilities
      )
    ) {
      event.preventDefault();
      dispatch({ type: 'POST_NEW_PROG', payload: newProg });
      setNewProg(progState);
    } else {
      // If a field is not filled out
      alert('Please fill out all input fields');
    }
  };

  const addDummy = () => {
    setNewProg({ 
      ...newProg, 
      prog_name: 'Jerome Residency: 2022',
      prog_location: '912 W Lake St, Minneapolis, MN 55408',
      prog_img_url: 'https://www.columbiamuseum.org/sites/default/files/styles/open_crop/public/2021-09/Art%20Class%20Stock%20%2811%20of%2037%29.jpg?h=56349611&itok=BPbLrQHy',
      description: 'Each year, three artists are selected to participate in the Jerome Early Career Printmakers Residency at Highpoint. Thanks to the generous support of the Jerome Foundation, this program has existed since 2003 and has served more than 40 early career printmakers. The residency begins in September and ends with a culminating exhibition in May.',
      start_date: '2022-09-01',
      end_date: '2023-05-31',
      deadline: '2022-07-18',
      app_url: 'https://www.highpointprintmaking.org/access/jerome-residency',
      funding_amount: '1025',
      cost_amount: '25',
      housing: 'Kitchen, Lunchroom',
      meals: 'Snacks',
      accessibility: 'Small dogs allowed',
      public_programs: 'Community Engagement, Discussion, 24 hour Open Studio',
      discipline: 'Printmaking',
      facilities: 'Intaglio, Relief, Lithography, Screenprinting',
    })

  }

  return (
    <>          
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
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
            <Typography variant="h5" textAlign="center" sx={{ mb: '2px' }}>
              Add Program Info
            </Typography>
            <Typography style={{color:'white'}} onClick={addDummy}>Secret</Typography>
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="Name"
              required
              value={newProg.prog_name}
              onChange={(e) =>
                setNewProg({ ...newProg, prog_name: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              label="Location"
              required
              value={newProg.prog_location}
              onChange={(e) =>
                setNewProg({ ...newProg, prog_location: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Image URL"
              value={newProg.prog_img_url}
              onChange={(e) =>
                setNewProg({ ...newProg, prog_img_url: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              required
              multiline
              rows="5"
              label="Description"
              value={newProg.description}
              onChange={(e) => 
                setNewProg({ ...newProg, description: e.target.value })}
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Start Date"
              value={newProg.start_date}
              onChange={(e) =>
                setNewProg({ ...newProg, start_date: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="End Date"
              value={newProg.end_date}
              onChange={(e) =>
                setNewProg({ ...newProg, end_date: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="App Deadline"
              value={newProg.deadline}
              onChange={(e) =>
                setNewProg({ ...newProg, deadline: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="App URL"
              value={newProg.app_url}
              onChange={(e) =>
                setNewProg({ ...newProg, app_url: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="number"
              required
              label="Funding Amount"
              value={newProg.funding_amount}
              onChange={(e) =>
                setNewProg({ ...newProg, funding_amount: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="number"
              required
              label="Cost Amount"
              value={newProg.cost_amount}
              onChange={(e) =>
                setNewProg({ ...newProg, cost_amount: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Housing"
              value={newProg.housing}
              onChange={(e) =>
                setNewProg({ ...newProg, housing: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Meals"
              value={newProg.meals}
              onChange={(e) =>
                setNewProg({ ...newProg, meals: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Accessibility"
              value={newProg.accessibility}
              onChange={(e) =>
                setNewProg({ ...newProg, accessibility: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Public Programs"
              value={newProg.public_programs}
              onChange={(e) =>
                setNewProg({ ...newProg, public_programs: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Discipline"
              value={newProg.discipline}
              onChange={(e) =>
                setNewProg({ ...newProg, discipline: e.target.value })
              }
            />
            <TextField
              sx={{ margin: '10px' }}
              autoComplete="off"
              type="text"
              required
              label="Facilities"
              value={newProg.facilities}
              onChange={(e) =>
                setNewProg({ ...newProg, facilities: e.target.value })
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
            <Button variant="outlined" onClick={addProg} sx={{ margin: '10px' }}>
              <Typography variant="h6">Submit</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NewProgram;
