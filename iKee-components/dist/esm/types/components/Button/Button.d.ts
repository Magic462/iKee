import React from 'react';
import './Button.scss';
interface ButtonProps {
    round?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
