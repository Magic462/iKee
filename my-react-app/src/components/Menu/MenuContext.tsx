import React, { createContext, useState, ReactNode } from 'react';


interface MenuContextProps {
    activeIndex: number;
    handleClick: (index: number) => void;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface MenuProviderProps {
    defaultIndex?: number;
    onSelect?: (selectedIndex: number) => void;
    children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ defaultIndex = 0, onSelect, children }) => {
    const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);

    const handleClick = (index: number) => {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    return (
        <MenuContext.Provider value={{ activeIndex, handleClick }}>
            {children}
        </MenuContext.Provider>
    );
};