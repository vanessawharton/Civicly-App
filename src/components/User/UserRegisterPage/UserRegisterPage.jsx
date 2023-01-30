import React from 'react';

import { useHistory } from 'react-router-dom';
import UserRegisterForm from './UserRegisterForm';

function UserRegisterPage() {
    const history = useHistory();

    return (
    <div>
        <UserRegisterForm />

        <center>
        <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
            history.push('/login');
            }}
        >
            Login
        </button>
        </center>
    </div>
    );
}

export default UserRegisterPage;