
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Menu = (props) =>{
	return (
		<Navbar bg="light" expand="lg">
		  <Container>
		    <Navbar.Brand href="">ISTA 330</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href=".#/register">Register</Nav.Link>
		        <Nav.Link href=".#/login">Login</Nav.Link>
		        <Nav.Link href="./">Home</Nav.Link>
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
	);
}



export default Menu;