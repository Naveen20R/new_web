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
              <HeaderLayout />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    </>
  );
}

export default Header;