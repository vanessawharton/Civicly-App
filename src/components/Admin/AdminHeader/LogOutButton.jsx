import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

function LogOutButton() {
  const dispatch = useDispatch();
  return (
    <Button
      edge="end"
      onClick={() => dispatch({ type: 'LOGOUT' })}
      color="inherit"
      aria-label="admin-logout"
      sx={{
        mt: 1,
        ml: 5,
        color: "#FFBC00"
      }}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
