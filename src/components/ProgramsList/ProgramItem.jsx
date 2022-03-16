import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as React from 'react';

// Material UI Imports
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function ProgramItem({ program }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectedProgram = (program) => {
    history.push(`/program-details/${program.prog_name}`);
  };

  const handleSelectedOrganization = (program) => {
    history.push(`/organization-details/${program.org_id}`);
  };

  const img = program.prog_img_url;
  const name = program.prog_name;
  const organization = program.org_name;
  const deadline = program.deadline;

  return (
    <Card style={{ backgroundColor: '#dee8f1' }} sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={(name, 'Poster')}
      />
      <CardContent sx={{ maxHeight: 60 }}>
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
          {deadline}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProgramItem;
