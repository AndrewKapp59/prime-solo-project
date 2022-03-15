import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import './LandingPage.css';

import { TextField, Button} from '@mui/material';

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
      <div className="searchPrograms">
        <TextField
          id="standard-multiline-flexible"
          multiline
          maxRows={5}
          sx={{ color: 'white' , mt: 1, mb: 1, width: 355 }}
          required
          label="Search"
          color="primary"
          autoComplete="off"
          // onChange={(event) => {addSearch}}
          value={search}
        />
      </div>
      <ProgramList />
    </div>
  );
}

export default LandingPage;
