import React from 'react';
import UserLoginForm from './UserLoginForm';
import { useHistory } from 'react-router-dom';

function UserLoginPage() {
    const history = useHistory();

    return (
    <div>
        <UserLoginForm />

        <center>
        <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
            history.push('/register');
            }}
        >
            Register
        </button>
        </center>
    </div>
    );
}

export default UserLoginPage;