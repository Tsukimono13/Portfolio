import React from 'react';
import {S} from "components/menu/Menu_Styles"

type MenuPropsType = {
    setIsOpenMenu?: (state: boolean) => void
}

export const Menu: React.FC<MenuPropsType> = ({setIsOpenMenu}) => {
    const menuItems = [
        {title: 'About me', href: "main"},
        {title: 'Stack', href: "stack"},
        {title: 'Projects', href: "works"},
        {title: 'Contact', href: "contact"}
    ]

    return (
        <ul>
            {menuItems.map((item, index) => <S.MenuItem key={index}>
                <S.NavLink to={item.href}
                           smooth={true}
                           activeClass={"active"}
                           spy={true}
                           offset={-10}
                           onClick={() => setIsOpenMenu ? setIsOpenMenu(false) : ''}
                >
                    {item.title}
                </S.NavLink>
            </S.MenuItem>)
            }
        </ul>
    );
};

