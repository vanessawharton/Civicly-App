import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, TextField, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function AdminLoginForm() {
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
            history.pushState('/admin/dashboard');
        } else {
            dispatch({ type: 'LOGIN_INPUT_ERROR' });
        }
    }; // end login
    return (
        <form
            className="formPanel" onSubmit={login}>
            <h2>Civicly Admin Login</h2>
            {errors.loginMessage && (
                <h3 className="alert" role="alert">
                    {errors.loginMessage}
                </h3>
            )}
            <div style={{ justifyContent: "center", alignItems: "center" }}>
                <label htmlFor="username">
                    <TextField
                        variant="standard"
                        type="text"
                        label="username"
                        name="username"
                        required
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
            </div>
            <br />
            <div>
                <label htmlFor="password">

                    <TextField
                        variant="standard"
                        label="password"
                        type="password"
                        name="password"
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
            </div>
            <br />
            <div>
                {/* <input className="btn" type="submit" name="submit" value="Log In" /> */}
                <Button style={{
                    color: "#FFFFFF",
                    backgroundColor: "#50C878"
                }}
                    className="btn" type="submit" name="submit" value="Log In"
                >
                    Log In
                </Button>
            </div>
        </form>
    );
}