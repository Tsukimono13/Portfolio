import React, {useState} from 'react';
import {S} from './TabMenu_Styled'
import {ButtonType} from "../../layout/sections/works/Works";


type PropsType = {
    selectedTab: string
    setSelectedTab: (tab: ButtonType) => void
}

const menuButtons = [
    {label: 'All', value: 'all'},
    {label: 'Web', value: 'web'},
    {label: 'Mobile', value: 'mobile'},
];

export const TabMenu: React.FC<PropsType> = ({selectedTab, setSelectedTab}) => {

    const handleTabClick = (tab: ButtonType) => {
        setSelectedTab(tab);
    };

    return (
        <S.MenuContainer>
            {menuButtons.map(({label, value}) => (
                <S.MenuButton
                    key={value}
                    className={selectedTab === value ? 'active' : ''}
                    onClick={() => handleTabClick(value as ButtonType)}
                >
                    {label}
                </S.MenuButton>
            ))}
        </S.MenuContainer>
    );
};



