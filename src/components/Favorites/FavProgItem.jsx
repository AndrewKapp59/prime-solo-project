import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function FavProgItem({ favProg }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const [favorite, setFavorite] = useState(true);

  const handleSelectedProgram = (favProg) => {
    history.push(`/program-details/${favProg.prog_name}`);
  };

  const handleSelectedOrganization = (favProg) => {
    history.push(`/organization-details/${favProg.org_id}`);
  };

  const addFavorite = () => {
    setFavorite(true);
  };

  const removeFavorite = () => {
    console.log('Removing Favorite');
    dispatch({ type: "DELETE_FAV_PROG", payload: favProg.prog_id });
    setFavorite(false);
  };



  const name = favProg.prog_name;
  const img = favProg.prog_img_url;
  const organization = favProg.org_name;
  const deadline = favProg.deadline;

  return (
    <Card
      className="prog-card"
      style={{ backgroundColor: '#dee8f1' }}
      sx={{ maxWidth: 500 }}
    >
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'img')}
      ></CardMedia>
      <CardContent sx={{ maxHeight: 60 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          onClick={() => handleSelectedProgram(favProg)}
        >
          {name}
        </Typography>
        <Typography 
        gutterBottom 
        variant="h7" 
        component="div"
        onClick={() => handleSelectedOrganization(favProg)}
        >
          {organization}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {deadline}
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

export default FavProgItem;