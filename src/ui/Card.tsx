import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Card = (props: CardProps) => {
    const { children, className,onClick } = props;

    return (
        <div className={`bg-white shadow rounded-xl p-4 ${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;
