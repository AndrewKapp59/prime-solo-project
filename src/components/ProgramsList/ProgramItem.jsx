import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';

import './ProgramList.css'

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


function ProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const [favorite, setFavorite] = useState(false);

  const handleSelectedProgram = (program) => {
    console.log(program.prog_name);
    history.push(`/program-details/${program.prog_name}`);
  };

  const handleSelectedOrganization = (program) => {
    console.log(program.org_user_id);
    history.push(`/organization-details/${program.org_id}`);
  };

  const addFavorite = () => {
    console.log("Adding Favorite");
    console.log(program)
    console.log(program.id)
    const postOptions = {
      prog_id: program.id,
      user_id: user.id
    };
    dispatch({ type: "POST_FAV_PROG", payload: postOptions });
    setFavorite(true);
  };

  const removeFavorite = () => {
    console.log('Removing Favorite');
    dispatch({ type: "DELETE_FAV_PROG", payload: program.id });
    setFavorite(false);
  };


  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;

  return (
    <Card 
    className='prog-card' 
    style={{ backgroundColor: '#dee8f1' }} 
    sx={{ width: 300}}
    >
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'Poster')}
      />
      <CardContent >
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
      {user.user_type === 'Artist' ? (
        <div className="favorite-overlay">
          {!favorite && (
            <BookmarkBorderIcon onClick={addFavorite} fontSize="medium" />
          )}
          {favorite && (
            <BookmarkIcon onClick={removeFavorite} fontSize="medium" />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Card>
  );
}

export default ProgramItem;
