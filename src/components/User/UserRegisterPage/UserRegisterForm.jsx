import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Input, TextField, Typography } from '@mui/material';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        zipcode: zipcode
      },
    });
    history.push('/profile')
  }; // end registerUser

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
          <Box component="form" className="formPanel" onSubmit={registerUser}>
            <Typography variant="h4">Register User</Typography>
            {errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {errors.registrationMessage}
              </h3>
            )}
            <div>
              <TextField
                  margin="normal"
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
{/* 
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label> */}
            </div>
            <div>
            <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="zipcode"
                  label="zipcode"
                  name="zipcode"
                  type="zipcode"
                  autoComplete="zipcode"
                  value={zipcode}
                  onChange={(event) => setZipcode(event.target.value)}
                />

              {/* <label htmlFor="zipCode">
                Zip Code:
                <input
                  type="zipcode"
                  name="zipcode"
                  value={zipcode}
                  required
                  onChange={(event) => setZipcode(event.target.value)}
                />
              </label> */}
            </div>
            <div>
              <Button variant="contained" type="submit" value="Register" >Submit</Button>
            </div>
          </Box>
        </Box>
        <Link onClick={() => { history.push('/login'); }}>Log in</Link>
      </Container>
    </div>
  );
}

export default RegisterForm;
