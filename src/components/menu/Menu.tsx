import React from 'react';
import {S} from "components/menu/Menu_Styles"

export const Menu: React.FC = () => {
    const menuItems = [{title: 'About me', href: "main"}, {title: 'Skills', href: "skills"}, {title: 'Projects', href: "works"}, {title: 'Contact', href: "contact"}]
    return (
            <ul>
                {menuItems.map((item, index) => <S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass={"active"}
                               spy={true}
                               offset={10}
                    >
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>)
                }
            </ul>
    );
};

