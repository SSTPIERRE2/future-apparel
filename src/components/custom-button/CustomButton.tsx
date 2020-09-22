import React from 'react';
import './CustomButton.scss';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    // children: string;
    type?: 'button' | 'submit' | 'reset';
    isGoogleSignIn?: boolean;
    inverted?: boolean;
}

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}: Props) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;
