import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

import {
    StyledBrand,
    // PageName,
    HidingNavLink,
    StyledLInk,
    ToggleWrapper,
} from './style'

export const MainNavbar: React.FC = () => {
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

                {/* <PageName>pageNameMovie</PageName> */}

                {/* BURGER MENU */}
                <ToggleWrapper>
                    <Navbar.Toggle />
                </ToggleWrapper>
                {/* <Nav className="mr-auto">  */}
                <HidingNavLink>
                    <Nav>
                        <NavLink to="/actions">
                            <StyledLInk>Actions</StyledLInk>
                        </NavLink>
                        {/*   */}
                        <NavLink to="/animation">
                            <StyledLInk>Animation</StyledLInk>
                        </NavLink>
                    </Nav>
                </HidingNavLink>
            </Navbar>



            {/* 
                        
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink to="/">Home</NavLink>
      <NavLink to="actions">Link</NavLink>
       
    </Nav>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                        <button>Search</button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            
            
            */}
        </>
    )
}
