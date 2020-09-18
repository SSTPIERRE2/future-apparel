import React, { SyntheticEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './SignUp.scss';

const initialState = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [user, setUser] = useState(initialState);
    const { displayName, email, password, confirmPassword } = user;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // console.log(`handleChange`, value, user);

        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            setUser(initialState);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="sign-up">
            <h2 className="title">Sign Up</h2>
            <span>Sign up with an email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    );
};

export default SignUp;
