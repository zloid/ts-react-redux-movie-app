import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { StyledLink } from './style'
import { closeBurgerMenu } from '../../features/defaultLook/defaultLookSlice'

export const NavLinks: React.FC = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(closeBurgerMenu())}>
            <NavLink to="/actions">
                <StyledLink>Action</StyledLink>
            </NavLink>
            <NavLink to="/animation">
                <StyledLink>Animation</StyledLink>
            </NavLink>
            <NavLink to="/test">
                <StyledLink>test</StyledLink>
            </NavLink>
            <NavLink to="/test">
                <StyledLink>test</StyledLink>
            </NavLink>
            <NavLink to="/test">
                <StyledLink>test</StyledLink>
            </NavLink>
            <NavLink to="/test">
                <StyledLink>test</StyledLink>
            </NavLink>
            <NavLink to="/test">
                <StyledLink>test</StyledLink>
            </NavLink>
        </div>
    )
}
