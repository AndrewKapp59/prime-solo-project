import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './LandingPage.css';

import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import ProgramList from '../ProgramsList/ProgramsList';

function LandingPage() {
  const history = useHistory();

  const [search, setSearch] = useState();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div>
      {/* <Box textAlign="center">
        <Button size="small" variant="container">
          Funded
        </Button>
        <Button size="small" variant="container">
          Free
        </Button>
        <Button size="small" variant="container">
          Cost
        </Button>
      </Box> */}
      <ProgramList />
    </div>
  );
}

export default LandingPage;
