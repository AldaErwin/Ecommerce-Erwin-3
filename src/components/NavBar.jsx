import React from 'react'
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

import { BsCart3 } from 'react-icons/bs';

function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"} >eCommerce 📱</Navbar.Brand>
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
                            <NavDropdown.Item  as={Link} to={"android/Model/Samsung"}>Samsung</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/Model/Xiaomi"}>Xiaomi</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/Model/Google"}>Google</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/Model/Huawei"}>Huawei</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to={"android/Model/Sony"}>Sony</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="" className='logIn'>Log In</Nav.Link>
                        <Nav.Link  as={Link} to={"/Chart"}><BsCart3 size={"2em"}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

