import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box component="form" container onSubmit={login} textAlign="center">
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <TextField
        id="username"
        maxRows={5}
        sx={{ color: 'white', mt: 1, mb: 1, width: 350 }}
        required
        label="Username"
        color="primary"
        autoComplete="off"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        id="outlined-required"
        maxRows={5}
        sx={{ color: 'white', mt: 1, mb: 1, width: 350 }}
        required
        label="Password"
        color="primary"
        autoComplete="off"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <FormControl>
        <FormLabel id="user-type-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="row-radio-buttons-group-label"
          name="user-type"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
      <Button variant="outlined" type="submit" name="submit" value="Log In">Login</Button>
    </Box>
  );
}

export default LoginForm;
