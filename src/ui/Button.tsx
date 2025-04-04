import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = (props: ButtonProps) => {
    const { children, onClick, className } = props;

    return (
        <button onClick={onClick} className={`shadow-md  bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition ${className}`}>
            {children}
        </button>
    );
};

export default Button;
