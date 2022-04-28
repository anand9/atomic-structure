import React from "react";
import {
	Navbar,
	NavbarText,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle
} from 'reactstrap'

export const TopNavbar = () => {
  return (
    <>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/">Example.Inc </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
};
