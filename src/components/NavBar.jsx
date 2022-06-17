import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

import { BsCart3 } from 'react-icons/bs';


function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"} >eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"} >INICIO</Nav.Link>
                        <NavDropdown title="IOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/iPhone/Model/13 Pro"}> iPhone 13 Pro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/iPhone/Model/13"    }> iPhone 13</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/iPhone/Model/12 Pro"}> iPhone 12 Pro</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/iPhone/Model/12"    }> iPhone 12</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ANDROID" id="collasible-nav-dropdown">
                            <NavDropdown.Item  as={Link} to={"android/brand/Samsung"}>Samsung</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/brand/Xiaomi"}>Xiaomi</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/brand/Google"}>Google</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/brand/Huawei"}>Huawei</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/brand/Sony"}>Sony</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Log In</Nav.Link>
                        <Nav.Link  as={Link} to={"/Chart"}><BsCart3/></Nav.Link>
                        <Nav.Link eventKey={2} href="">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

