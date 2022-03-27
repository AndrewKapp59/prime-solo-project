import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        {/* <Button
          variant="outlined"
          onClick={() => {
            history.push('/registration');
          }}
          sx={{ m: 1 }}
        >
          Register
        </Button> */}
        {/* <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button> */}
      </center>
    </div>
  );
}

export default LoginPage;
