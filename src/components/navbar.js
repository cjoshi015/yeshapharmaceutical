import React, { Component } from 'react';
import {Navbar , Nav, NavDropdown,Col,Image} from 'react-bootstrap';
import logoimg from '../img/icon.jpg'


class Navigationbar extends Component{
    render(){
        return(
            <Navbar className="navbar-color" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logoimg} className="logoimg" alt="Logoimg"/>
                Yesha Pharmaceutical
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navbar-menu">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#contactus">Our Partners</Nav.Link>
                <Nav.Link href="#contactus">Our Products</Nav.Link>
                <Nav.Link href="#contactus">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        );
    }
}
export default Navigationbar;