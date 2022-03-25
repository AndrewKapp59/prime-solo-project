import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
// import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
// import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Logout } from '@mui/icons-material';

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    dispatch({ type: 'LOGOUT', payload: history });
  }

  return (
    <div>
      {/* If no user is logged in, show these links */}
      {!user.id && (
        // If there's no user, show login/registration links
        <Box textAlign="center">
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
              Login
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

      {/* If a user is logged in as an Artist, show these links */}
      {user.user_type === 'Artist' && (
        <Box textAlign="center">
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/organizations"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Organizations
            </Link>
          </Button>
          <Button
            size="small"
            variant="text"
            onClick={logOut}
          >
            Logout
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
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/favorites"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              My Favorites
            </Link>
          </Button>
        </Box>
      )}

      {/* If a user is logged in as an Organization, show these links */}
      {user.user_type === 'Organization' && (
        <Box textAlign="center">
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/organizations"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Organizations
            </Link>
          </Button>
          <Button
            size="small"
            variant="text"
            onClick={logOut}
          >
            Logout
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
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/org-programs"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              My Programs
            </Link>
          </Button>
            <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/org-profile"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              My Profile
            </Link>
          </Button>
          <Button size="small" variant="text">
            <Link
              className="navLink"
              to="/new-program"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              Add Program
            </Link>
          </Button>
        </Box>
      )}
    </div>
  );
}

export default Nav;
