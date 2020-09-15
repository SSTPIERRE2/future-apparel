import React from 'react';
import './CustomButton.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    // children: string;
    type?: 'button' | 'submit' | 'reset';
    isGoogleSignIn?: boolean;
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: Props) => (
    <button
        className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
