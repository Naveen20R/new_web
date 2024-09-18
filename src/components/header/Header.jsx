"use client"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '@/assets/img/logo/Logo.jpeg';
import Image from 'next/image';
import HeaderLink from './HeaderLink';
import HeaderDropdown from './HeaderDropdown';

import Menu from '@/layouts/MenuLayout';
import HeaderLayout from './HeaderLayout';

// import { Sidenav, Nav } from 'rsuite';

function Header() {
  return (
    <>
      <Navbar key='md' expand='md' className="bg-body-tertiary">
        <Container className='container' fluid>
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" width={160} height={40} />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0 toggle-bar-parent">
            <i className="fa-solid fa-bars toggle-bar" aria-controls={`offcanvasNavbar-expand-md`}></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end" >

            <Offcanvas.Header closeButton style={{ background: '#f6f6f6' }}>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image src={logo} alt="Logo" width={160} height={40} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='p-0'>

              {/* <Nav> */}

                {/* <Nav className="justify-content-end  d-md-none  flex-grow-1 pe-3"> */}
                {/* <HeaderLink /> */}
                {/* <HeaderDropdown data={{ title: 'Home', dropDesc: ['data','child']}} /> */}
                {/* <HeaderDropdown data={{ title: 'Home', dropDesc: "test Home" }} /> */}
                {/* <HeaderDropdown data={{ title: 'Home', dropDesc: "child Home" }} /> */}

                {/* <Menu /> */}
                {/* </Nav> */}
                {/* <Nav activeKey="1">
                    <Nav.Item eventKey="1" >
                      Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" >
                      User Group
                    </Nav.Item>
                    <Nav.Menu eventKey="3" title="Advanced" >
                      <Nav.Item eventKey="3-1">Geo</Nav.Item>
                      <Nav.Item eventKey="3-2">Devices</Nav.Item>
                      <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                      <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                    </Nav.Menu>
                    <Nav.Menu eventKey="4" title="Settings" >
                      <Nav.Item eventKey="4-1">Applications</Nav.Item>
                      <Nav.Item eventKey="4-2">Channels</Nav.Item>
                      <Nav.Item eventKey="4-3">Versions</Nav.Item>
                      <Nav.Menu eventKey="4-5" title="Custom Action">
                        <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                        <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                      </Nav.Menu>
                    </Nav.Menu> */}

                <HeaderLayout />

              {/* </Nav> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    </>
  );
}

export default Header;