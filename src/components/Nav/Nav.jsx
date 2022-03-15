import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';
// import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div>
      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <Box
          textAlign="center"
        >
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/organizations"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Organizations
            </Link>
          </Button>
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/login"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Login / Register
            </Link>
          </Button>
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/programs"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Programs
            </Link>
          </Button>
        </Box>
      )}

      {/* If a user is logged in, show these links */}
      {user.id && (
        <>
          <Link className="navLink" to="/user">
            Home
          </Link>

          <Link className="navLink" to="/info">
            Info Page
          </Link>

          <LogOutButton className="navLink" />
        </>
      )}
    </div>
  );
}

export default Nav;
