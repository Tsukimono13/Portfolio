import React, {useState} from 'react';
import {Menu} from "components/menu/Menu";
import {S} from '../HeaderMenu_Styles';
import logo from 'assets/image/logoForPopup.svg'
import {Bounce, Fade, Flip, Roll} from "react-awesome-reveal";


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

