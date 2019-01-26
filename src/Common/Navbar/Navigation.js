import React from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import logo from '../../assets/logo.png';
import cls from './Navigation.module.css';
class Navigation extends React.Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar color="white" light expand="md" style={{ marginTop: "0px" }}>
                <MDBNavbarBrand href="#">
                    <img src={logo} height="50" alt="" />
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to="/" className={cls.navigationColor}>HOME</MDBNavLink>
                        </MDBNavItem>
                        {/* <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret className={cls.navigationColor}>
                                    <div className="d-none d-md-inline ">SERVICES</div>
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                    <MDBDropdownItem className={cls.navigationColor} ><MDBNavLink to="/services" className={cls.navigationColor} >WATER</MDBNavLink></MDBDropdownItem>
                                    <MDBDropdownItem className={cls.navigationColor} ><MDBNavLink to="/services" className={cls.navigationColor} >TRANSPORT</MDBNavLink></MDBDropdownItem>
                                    <MDBDropdownItem className={cls.navigationColor} ><MDBNavLink to="/services" className={cls.navigationColor} >POWER</MDBNavLink></MDBDropdownItem>
                                    <MDBDropdownItem className={cls.navigationColor} ><MDBNavLink to="/services" className={cls.navigationColor} >BUILDING</MDBNavLink></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem> */}
                        <MDBNavItem>
                            <MDBNavLink to="/services" className={cls.navigationColor}>SERVICES</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/machinery" className={cls.navigationColor} >MACHINERY</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about" className={cls.navigationColor}>ABOUT</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/contact" className={cls.navigationColor} >CONTACT</MDBNavLink>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Navigation;