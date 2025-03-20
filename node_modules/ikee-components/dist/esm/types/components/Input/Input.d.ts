import React from 'react';
import './Input.scss';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customsize?: 'small' | 'large';
    disabled?: boolean;
}
declare const Input: React.FC<InputProps>;
export default Input;
