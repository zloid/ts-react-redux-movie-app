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

            <NavLink to="/western">
                <StyledLink>Western</StyledLink>
            </NavLink>
            <NavLink to="/horror">
                <StyledLink>Horror</StyledLink>
            </NavLink>
            <NavLink to="/sci-fi">
                <StyledLink>Sci-fi</StyledLink>
            </NavLink>
            <NavLink to="/crime">
                <StyledLink>Crime</StyledLink>
            </NavLink>
            <NavLink to="/animation">
                <StyledLink>Animation</StyledLink>
            </NavLink>
            <NavLink to="/music">
                <StyledLink>Music</StyledLink>
            </NavLink>
            <NavLink to="/history">
                <StyledLink>History</StyledLink>
            </NavLink>
        </div>
    )
}
