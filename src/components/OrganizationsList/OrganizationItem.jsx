import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function OrganizationItem({ organization }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedOrganization = (movie) => {
    dispatch({ type: 'SET_SELECTED_ORGANIZATION', payload: organization });
    history.push('/organization-details');
  };

  const img = organization.org_img_url;
  const name = organization.org_name;

  return (
    <Card style={{ backgroundColor: '#dee8f1' }} sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="100"
        image={img}
        onClick={() => handleSelectedOrganization(organization)}
        alt={(name, 'Poster')}
      />
      <CardContent sx={{ maxHeight: 60 }}>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrganizationItem;