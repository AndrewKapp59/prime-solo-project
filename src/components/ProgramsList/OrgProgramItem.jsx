import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';

import './ProgramList.css';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function OrgProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);

  const handleSelectedProgram = (program) => {
    history.push(`/program-details/${program.prog_name}`);
  };

  const handleClickOpen = () => {
    // Opens edit Dialog box.
    setOpen(true);
  };

  const deleteProgram = () => {
    // 
    dispatch({ type: 'DELETE_PROG', payload: program.id });
  };

  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;

  return (
    <Card
      className="prog-card"
      style={{ backgroundColor: '#dee8f1' }}
      sx={{ width: 300 }}
    >
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'Poster')}
      />
      {user.user_type === 'Organization' ? (
        <div className="edit-delete-overlay">
          <Button
            className="edit-button"
            size="small"
            variant="contained"
            onClick={handleClickOpen}
          >
            Edit
          </Button>
          <Button
            className="edit-button"
            size="small"
            variant="contained"
            onClick={deleteProgram()}
          >
            Delete
          </Button>
        </div>
      ) : (
        <div></div>
      )}

      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          onClick={() => handleSelectedProgram(program)}
        >
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          onClick={() => handleSelectedOrganization(program)}
        >
          {organization}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          Deadline: {deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrgProgramItem;
