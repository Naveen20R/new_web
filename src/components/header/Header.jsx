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

function Header() {
  return (
    <>
      <Navbar key='md' expand='md' className="bg-body-tertiary">
        <Container className='container' fluid>
          <Navbar.Brand href="#">
            <Image src={logo} alt="Logo" width={160} height={40} />
          </Navbar.Brand>
          <Navbar.Toggle className="border-0 toggle-bar-parent">

            <i class="fa-solid fa-bars toggle-bar" aria-controls={`offcanvasNavbar-expand-md`}></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end" >

            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image src={logo} alt="Logo" width={160} height={40} />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body className='p-0'>
              <Nav className="justify-content-end  d-md-none  flex-grow-1 pe-3">
                <HeaderLink />
                <HeaderDropdown datas={{ title: 'Home', dropDesc: "child Home" }} />
                <HeaderDropdown datas={{ title: 'Home', dropDesc: "child Home" }} />
                <HeaderDropdown datas={{ title: 'Home', dropDesc: "child Home" }} />
                {/* <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link> */}
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-md`}>
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;