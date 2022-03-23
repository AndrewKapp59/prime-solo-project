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
import TextField from '@mui/material/TextField';

function OrgProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);

  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;

  const [update, setUpdate] = useState(updateState);

  const updateState = {
    prog_name: program.prog_name,
    prog_location: program.prog_location,
    prog_img_url: program.prog_img_url,
    description: program.description,
    start_date: program.start_date,
    end_date: program.end_date,
    deadline: program.deadline,
    app_url: program.app_url,
    funding_amount: program.funding_amount,
    cost_amount: program.cost_amount,
    housing: program.housing,
    meals: program.meals,
    accessibility: program.accessibility,
    public_programs: program.public_programs,
    discipline: program.discipline,
    facilities: program.facilities,
  };


  const handleSelectedProgram = (program) => {
    history.push(`/program-details/${program.prog_name}`);
  };

  const [alert, setAlert] = React.useState(false);

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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseEdit = () => {
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
          {open && (
            <Dialog open={open} onClose={handleCloseEdit}>
              <DialogTitle>{program.prog_name}</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="prog_name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  value={update.prog_name}
                  onChange={(e) =>
                    setUpdate({ ...update, prog_name: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="2"
                  fullWidth
                  label="Location"
                  margin="dense"
                  id="prog_location"
                  type="text"
                  variant="standard"
                  value={update.prog_location}
                  onChange={(e) =>
                    setUpdate({ ...update, prog_location: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="4"
                  fullWidth
                  label="Image"
                  margin="dense"
                  id="prog_img_url"
                  type="text"
                  variant="standard"
                  value={update.prog_img_url}
                  onChange={(e) =>
                    setUpdate({ ...update, prog_img_url: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="5"
                  fullWidth
                  label="About"
                  margin="dense"
                  id="description"
                  type="text"
                  variant="standard"
                  value={update.description}
                  onChange={(e) =>
                    setUpdate({ ...update, description: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Instagram"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.instagram_url}
                  onChange={(e) =>
                    setUpdate({ ...update, about: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Facebook"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.facebook_url}
                  onChange={(e) =>
                    setUpdate({ ...update, about: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Twitter"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.twitter_url}
                  onChange={(e) =>
                    setUpdate({ ...update, about: e.target.value })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEdit}>Cancel</Button>
                <Button onClick={updateOrg}>Update</Button>
              </DialogActions>
            </Dialog>
          )}
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
              {'Are you sure you want to delete this program?'}
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
