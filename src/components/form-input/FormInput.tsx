import React from 'react';
import './FormInput.scss';

interface Props extends React.HTMLProps<HTMLInputElement> {
    // handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value: string;
}

const FormInput = ({ label, ...otherProps }: Props) => (
    <div className="group">
        <input className="form-input" {...otherProps} />
        {!!label && (
            <label
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
        )}
    </div>
);

export default FormInput;
