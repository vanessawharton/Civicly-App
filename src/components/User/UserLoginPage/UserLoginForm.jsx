import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, TextField, Typography } from '@mui/material';

function UserLoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div>
      <Container
        sx={{
          mb: 27
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Box component="form" className="formPanel" onSubmit={login}>
            <Typography variant="h4">Welcome Back!</Typography>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
            <div>
              <TextField
                  margin="normal"
                  sx={{backgroundColor: "rgba(255, 255, 255, .75)"}}
                  required
                  fullWidth
                  id="userName"
                  label="Username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoFocus
                />
            </div>
            <div>
              <TextField
                    margin="normal"
                    sx={{backgroundColor: "rgba(255, 255, 255, .75)"}}
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
            </div>
              {/* <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label> */}
              <div>
                <Button sx={{mt:2}} variant='contained' type="submit" name="submit" value="Log In">Log in</Button>
              </div>
          </Box>
          </Box>
        <Button onClick={() => {history.push('/register');}}>Don't have a login? Register here!</Button>
      </Container>
    </div>
  );
}

export default UserLoginForm;
