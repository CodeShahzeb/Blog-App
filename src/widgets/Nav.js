import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link style={{color: "white",textDecoration: 'none'}} to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link style={{color: "white",textDecoration: 'none'}} to='/add-blog'>Add Blog</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;