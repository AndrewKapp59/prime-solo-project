import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function ProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedProgram = (movie) => {
    dispatch({ type: 'SET_SELECTED_PROGRAM', payload: program });
    history.push('/program-details');
  };

  const img = program.img_url;
  const name = program.name;
  const organization = program.organization;
  const deadline = program.deadline;

  const styles = (theme) => ({
    card: {
      backgroundColor: 'primary',
    },
  });

  return (
    <Card style={{ backgroundColor: '#dee8f1' }} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="325"
        image={img}
        onClick={() => handleSelectedProgram(program)}
        alt={(name, 'Poster')}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {organization}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProgramItem;
