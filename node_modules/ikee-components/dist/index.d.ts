import React, { FC, ReactElement } from 'react';

interface ButtonProps {
    round?: boolean;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    type?: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    customsize?: 'small' | 'large';
    disabled?: boolean;
}
declare const Input: React.FC<InputProps>;

interface DataSourceObject {
    value: string;
}
type DataSourceType<T = {}> = T & DataSourceObject;
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * 自动完成输入框组件
 */
declare const AutoComplete: FC<AutoCompleteProps>;

interface MenuItemProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}
declare const MenuItem: React.FC<MenuItemProps>;

type MenuMode = 'horizontal' | 'vertical';
interface MenuProps {
    defaultIndex?: number;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: number) => void;
    children: ReactElement<typeof MenuItem>[];
}
declare const Menu: React.FC<MenuProps>;

declare const Submenu: React.FC;

export { AutoComplete, Button, Input, Menu, MenuItem, Submenu };
