import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const Input = (props: InputProps) => {
    const {className,...rest}=props
    return (
        <input
            {...rest}
            className={`w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 shadow-sm transition ${className}`}
        />
    );
};

export default Input;
