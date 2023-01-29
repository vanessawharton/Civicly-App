import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import LandingPageImage from "./splash.png";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const onRegister = (event) => {
    history.push('/register');
  };

  return (
    <Box sx={{ 
      backgroundImage: `url(${LandingPageImage})`, 
      backgroundRepeat: "no-repeat",
      backgroundSize:"contain",
      height: 844,
      width: 390,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': { m: 1, },
    }}>
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
        sx={{ mt: 40 }}
      >
        <Button className="btn" onClick={onLogin}>
          Login
        </Button>
        <Button className="btn" onClick={onRegister}>
          Register
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default LandingPage;
