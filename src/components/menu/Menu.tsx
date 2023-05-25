import React from 'react';
import {S} from "components/menu/Menu_Styles"

export const Menu: React.FC = () => {
    const menuItems = ['About me', 'Skills', 'Projects', 'Contact']
    return (
            <ul>
                {menuItems.map((item, index) => <S.MenuItem key={index}>
                    <S.Link href="">{item}</S.Link>
                </S.MenuItem>)
                }
            </ul>
    );
};

