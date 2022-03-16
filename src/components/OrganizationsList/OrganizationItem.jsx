import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function OrganizationItem({ organization }) {
  const history = useHistory();

  const handleSelectedOrganization = (organization) => {
    history.push(`/organization-details/${organization.org_id}`);
  };

  console.log(organization);

  const name = organization.org_name;
  const img = organization.org_img_url;

  return (
    <Card style={{ backgroundColor: '#dee8f1' }} sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'img')}
      ></CardMedia>

      <BookmarkBorderIcon style={{ color: 'black' }} sx={{ ml: 38, mt: 1 }} />
      <CardContent sx={{ maxHeight: 60 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          onClick={() => handleSelectedOrganization(organization)}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrganizationItem;
