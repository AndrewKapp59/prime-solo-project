import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
  
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        user_type: value
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <FormControl>
        <FormLabel id="user-type-radio-buttons-group-label">User Type</FormLabel>
        <RadioGroup
          row
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Artist" control={<Radio />} label="Artist" />
          <FormControlLabel value="Organization" control={<Radio />} label="Organization" />
        </RadioGroup>
      </FormControl>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
