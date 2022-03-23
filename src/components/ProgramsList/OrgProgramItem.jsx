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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function OrgProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);

  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;

  const handleSelectedProgram = (program) => {
    history.push(`/program-details/${program.prog_name}`);
  };

  const [alert, setAlert] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenAlert = () => {
    setAlert(true);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const deleteProgram = () => {
    dispatch({ type: 'DELETE_PROG', payload: name });
    setAlert(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            onClick={handleClickOpenAlert}
          >
            Delete
          </Button>
          <Dialog
            open={alert}
            onClose={handleCloseAlert}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to delete this program?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Once this program is deleted you will not be able to recover it. 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAlert}>Cancel</Button>
              <Button onClick={deleteProgram} autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
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
