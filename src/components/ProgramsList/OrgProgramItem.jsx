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

  // const name = program.id;
  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;



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

  const [update, setUpdate] = useState(updateState);

  const updateProg = (e) => {
    e.preventDefault();
    // Sending dispatch to saga to handle the edit program function
    dispatch({ type: 'EDIT_PROG', payload: { update, name } });
    setOpen(false); // Close the edit dialog
    setUpdate(updateState); // reset the edit state to default
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
                  label="Description"
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
                  label="Start Date"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.start_date}
                  onChange={(e) =>
                    setUpdate({ ...update, start_date: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="End Date"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.end_date}
                  onChange={(e) =>
                    setUpdate({ ...update, end_date: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Deadline"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.deadline}
                  onChange={(e) =>
                    setUpdate({ ...update, deadline: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="App Url"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.app_url}
                  onChange={(e) =>
                    setUpdate({ ...update, app_url: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Funding Amount"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.funding_amount}
                  onChange={(e) =>
                    setUpdate({ ...update, funding_amount: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Cost Amount"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.cost_amount}
                  onChange={(e) =>
                    setUpdate({ ...update, cost_amount: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Housing"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.housing}
                  onChange={(e) =>
                    setUpdate({ ...update, housing: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Meals"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.meals}
                  onChange={(e) =>
                    setUpdate({ ...update, meals: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Accessibility"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.accessibility}
                  onChange={(e) =>
                    setUpdate({ ...update, accessibility: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Public Programs"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.public_programs}
                  onChange={(e) =>
                    setUpdate({ ...update, public_programs: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Discipline"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.discipline}
                  onChange={(e) =>
                    setUpdate({ ...update, discipline: e.target.value })
                  }
                />
                <TextField
                  autoFocus
                  multiline
                  rows="1"
                  fullWidth
                  label="Facilities"
                  margin="dense"
                  id="about"
                  type="text"
                  variant="standard"
                  value={update.facilities}
                  onChange={(e) =>
                    setUpdate({ ...update, facilities: e.target.value })
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseEdit}>Cancel</Button>
                <Button onClick={updateProg}>Update</Button>
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
          App Deadline: {new Date(deadline).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrgProgramItem;
