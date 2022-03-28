import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = React.useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  console.log(value);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addLogin = () => {
    setUsername('Liz@gmail.com')
    setPassword('NOT1234')
  } 

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        user_type: value,
      },
    });
  }; // end registerUser

  return (
    <Box component="form" container onSubmit={registerUser} textAlign="center">
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <TextField
          htmlFor="username"
          id="username"
          maxRows={5}
          sx={{ color: 'white', mt: 1, mb: 1, width: 300 }}
          required
          label="Username"
          color="primary"
          autoComplete="off"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></TextField>
      </div>
      <div>
        <TextField
          id="outlined-required"
          maxRows={5}
          sx={{ color: 'white', mt: 1, mb: 1, width: 300 }}
          required
          label="Password"
          color="primary"
          autoComplete="off"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></TextField>
      </div>
      <FormControl>
        <FormLabel id="user-type-radio-buttons-group-label">
          Select User Type
        </FormLabel>
        <RadioGroup row value={value} onChange={handleChange}>
          <FormControlLabel value="Artist" control={<Radio />} label="Artist" />
          <FormControlLabel
            value="Organization"
            control={<Radio />}
            label="Organization"
          />
        </RadioGroup>
      </FormControl>
      <div>
      <Button variant="outlined" type="submit" name="submit" value="Register">Register</Button>
      </div>
      <Typography style={{color:'white'}} onClick={addLogin}>Secret</Typography>
    </Box>
  );
}

export default RegisterForm;
