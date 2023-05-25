import React from 'react';
import {Menu} from "components/menu/Menu";
import { S } from '../HeaderMenu_Styles';


export const MobileMenu: React.FC = () => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobilMenuPopup isOpen={false}>
                <Menu/>
            </S.MobilMenuPopup>
        </S.MobileMenu>
    );
};

