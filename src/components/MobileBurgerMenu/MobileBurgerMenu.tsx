import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { slide as Menu } from 'react-burger-menu'
import { Button } from 'react-bootstrap'

import {
    openCloseBurgerMenu,
    selectIsBurgerMenuOpen,
} from '../../features/defaultLook/defaultLookSlice'
import { SearchInput } from '../SearchBox/SearchInput'
import { NavLinks } from '../NavLinks/NavLinks'
import { MobileLinks } from './style'
export const MobileBurgerMenu: React.FC = () => {
    const isBurgerMenuOpen = useSelector(selectIsBurgerMenuOpen)
    const dispatch = useDispatch()
    return (
        <>
            <Menu
                isOpen={isBurgerMenuOpen}
                onClose={() => dispatch(openCloseBurgerMenu())}
                width={'300px'}
            >
                <Button
                    variant="warning"
                    onClick={() => dispatch(openCloseBurgerMenu())}
                >
                    X
                </Button>
                <SearchInput />
                <MobileLinks>
                    <NavLinks />
                </MobileLinks>
            </Menu>
        </>
    )
}
