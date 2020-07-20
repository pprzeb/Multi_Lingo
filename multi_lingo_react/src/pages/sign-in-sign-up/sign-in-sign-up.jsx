import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component'

import './sign-in-sign-up.scss';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInSignUp = () => {

    return (
        <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
        </div>
        
    )
}

export default SignInSignUp