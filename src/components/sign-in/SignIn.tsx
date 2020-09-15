import React, { SyntheticEvent, ChangeEvent, useState } from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

interface State {
    email: string;
    password: string;
}

const SignIn = () => {
    const [userCredentials, setCredentials] = useState<State>({
        email: '',
        password: '',
    });
    const { email, password } = userCredentials;

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        setCredentials({
            email: '',
            password: '',
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value,
        });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                />
                <FormInput
                    required
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
