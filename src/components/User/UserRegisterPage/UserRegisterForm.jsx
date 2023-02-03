import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

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
          <form className="formPanel" onSubmit={registerUser}>
            <h2>Register User</h2>
            {errors.registrationMessage && (
              <h3 className="alert" role="alert">
                {errors.registrationMessage}
              </h3>
            )}
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={username}
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="zipCode">
                Zip Code:
                <input
                  type="zipcode"
                  name="zipcode"
                  value={zipcode}
                  required
                  onChange={(event) => setZipcode(event.target.value)}
                />
              </label>
            </div>
            <div>
              <input className="btn" type="submit" name="submit" value="Register" />
            </div>
          </form>
        </Box>
        <Link onClick={() => { history.push('/login'); }}>Log in</Link>
      </Container>
    </div>
  );
}

export default RegisterForm;
