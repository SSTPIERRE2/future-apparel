import React, { SyntheticEvent, ChangeEvent, useState } from 'react';
import FormInput from '../form-input/FormInput';
import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

interface State {
    email: string;
    password: string;
}

const initialState = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [userCredentials, setCredentials] = useState<State>(initialState);
    const { email, password } = userCredentials;

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials(initialState);
        } catch (error) {
            console.log(error);
        }
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
