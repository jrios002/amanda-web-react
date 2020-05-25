import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './SignInOrRegister.scss';

const SignInOrRegister = () => {
    return (
        <div className="white sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInOrRegister;