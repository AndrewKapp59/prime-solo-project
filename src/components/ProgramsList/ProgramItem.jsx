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

  const name = program.title;
  const poster = movie.poster;
  const id = movie.id;

  const styles = theme => ({
    card: {
      backgroundColor: "primary"
    }
  });
  
  return (
    <Card  style={{backgroundColor: "#dee8f1"}} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="325"
        image={poster}
        onClick={() => handleSelectedProgram(program)}
        alt={(title, 'Poster')}
      />
    </Card>
  );
}

export default ProgramItem;