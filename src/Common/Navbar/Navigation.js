import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";
import logo from '../../assets/logo.png';
import cls from './Navigation.module.css';
class Navigation extends React.Component {

    state = {
        isOpen: false
    };

    //toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

    render() {
        return (
            <Navbar color="white" light expand="md" style={{ marginTop: "0px" }}>
                <NavbarBrand href="#">
                    <img src={logo} height="50" alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <NavbarNav right>
                        <NavItem active>
                            <NavLink to="/" className={cls.navigationColor}>HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret className={cls.navigationColor}>
                                    <div className="d-none d-md-inline ">SERVICES</div>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-default" right>
                                    <DropdownItem href="/services" className={cls.navigationColor} >Water</DropdownItem>
                                    <DropdownItem href="/services" className={cls.navigationColor} >Transportation</DropdownItem>
                                    <DropdownItem href="/services" className={cls.navigationColor} >Power Transmission</DropdownItem>
                                    <DropdownItem href="/services" className={cls.navigationColor} >Building Works</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/projects" className={cls.navigationColor}>PROJECTS</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink to="/machinery" className={cls.navigationColor} >MACHINERY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className={cls.navigationColor}>ABOUT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact" className={cls.navigationColor} >CONTACT</NavLink>
                        </NavItem>

                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;