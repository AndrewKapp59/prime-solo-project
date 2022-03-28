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
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = React.useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  console.log(value);

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
      <FormControl sx={{ m: 1, width: 300 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
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
