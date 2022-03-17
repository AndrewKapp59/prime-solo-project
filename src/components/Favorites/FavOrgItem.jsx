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

function FavOrgItem({ favOrg }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [favorite, setFavorite] = useState(true);

  const addFavorite = () => {
    // console.log("Adding Favorite");
    // const postOptions = {
    //   org_id: organization.id,
    //   user_id: user.id
    // };
    // dispatch({ type: "POST_FAV_ORG", payload: postOptions });
    // setFavorite(true);
  };

  const removeFavorite = () => {
    console.log('Removing Favorite');

    dispatch({ type: "DELETE_FAV_ORG", payload: favOrg.org_id });

    setFavorite(false);
  };

  const handleSelectedOrganization = (favOrg) => {
    history.push(`/organization-details/${favOrg.org_id}`);
  };

  const name = favOrg.org_name;
  const img = favOrg.org_img_url;

  return (
    <Card
      className="org-card"
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
          onClick={() => handleSelectedOrganization(favOrg)}
        >
          {name}
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

export default FavOrgItem;