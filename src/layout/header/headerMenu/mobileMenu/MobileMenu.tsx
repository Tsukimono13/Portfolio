import React, {useState} from 'react';
import {Menu} from "components/menu/Menu";
import {S} from '../HeaderMenu_Styles';

export const MobileMenu: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const OnClickBurgerBtn = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={OnClickBurgerBtn} isOpen={isOpenMenu}>
                <span></span>
            </S.BurgerButton>
            <S.MobilMenuPopup onClick={() => {
                setIsOpenMenu(false)
            }} isOpen={isOpenMenu}>
                <Menu setIsOpenMenu={() => {
                    setIsOpenMenu(false)
                }}/>
            </S.MobilMenuPopup>
        </S.MobileMenu>
    );
};

