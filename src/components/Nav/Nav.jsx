import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
// import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className=""> 
      <Button variant="text" className='nav'>
        <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>
          <h2 className="nav-title">Art Rez</h2>
        </Link>
      </Button>

      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Button variant="text">
              <Link
                className="navLink"
                to="/organizations"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Organizations
              </Link>
            </Button>
            <Button variant="text">
              <Link
                className="navLink"
                to="/login"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Login / Register
              </Link>
            </Button>
            <Button variant="text">
              <Link
                className="navLink"
                to="/programs"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Programs
              </Link>
            </Button>
          </>
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
    </div>
  );
}

export default Nav;
