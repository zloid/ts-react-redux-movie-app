import React from 'react'
import { useDispatch } from 'react-redux'
import { openCloseBurgerMenu } from '../../features/defaultLook/defaultLookSlice'
import { Navbar } from 'react-bootstrap'
import { MobileBurgerMenu } from '../MobileBurgerMenu/MobileBurgerMenu'
import { StyledBrand, HidingNavLink, ToggleWrapper } from './style'
import { NavLinks } from '../NavLinks/NavLinks'

export const MainNavbar: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <>
            {' '}
            <Navbar className="navbar-light" expand="lg" variant="light">
                <Navbar.Brand href="/">
                    <StyledBrand>
                        FIND
                        <br />
                        YOUR
                        <br />
                        MOVIE
                    </StyledBrand>
                </Navbar.Brand>

                {/* BURGER MENU */}
                <ToggleWrapper>
                    <Navbar.Toggle
                        onClick={() => dispatch(openCloseBurgerMenu())}
                    />
                </ToggleWrapper>

                <MobileBurgerMenu />

                <HidingNavLink>
                    <NavLinks />
                </HidingNavLink>
            </Navbar>
        </>
    )
}
