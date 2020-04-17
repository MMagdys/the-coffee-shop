import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state ={
            isNavOpen: false
        };

        this.togglenav = this.togglenav.bind(this);
    }

    togglenav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.togglenav} />
                    <NavbarBrand className="mr-auto" href="/the-coffee-shop/">
                        {/* <img src="assets/images/logo.png" height="30" width ="41"
                        alt="Ristorante Con Fusion" /> */}
                        THE COFFEE SHOP
                    </NavbarBrand>
            
                    <Nav navbar>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Collapse>
                    </Nav>
                </div>
			</Navbar>

            </>
            
        );
    }
}

export default Header;