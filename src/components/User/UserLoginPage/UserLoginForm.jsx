import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
          <form className="formPanel" onSubmit={login}>
            <h2>Welcome Back!</h2>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
              <label htmlFor="username">
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
              </label>
              <input className="btn" type="submit" name="submit" value="Log In" />
          </form>
          </Box>
        <Link onClick={() => {history.push('/register');}}>Don't have a login? Register here!</Link>
      </Container>
    </div>
  );
}

export default UserLoginForm;
