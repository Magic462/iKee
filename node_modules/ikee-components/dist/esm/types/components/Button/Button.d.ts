import React from 'react';
interface ButtonProps {
    round?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
