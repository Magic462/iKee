import React, { ReactNode } from 'react';
interface MenuContextProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}
export declare const MenuContext: React.Context<MenuContextProps | undefined>;
interface MenuProviderProps {
    defaultIndex?: number;
    onSelect?: (selectedIndex: number) => void;
    children: ReactNode;
}
export declare const MenuProvider: React.FC<MenuProviderProps>;
export {};
