import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

const Header = () => {

return (

<>
<Navbar>

  <Container>
    <Navbar.Brand to="/">Account Management System</Navbar.Brand>
    <Nav.Link as={Link} to="/">Student</Nav.Link>
    <Nav.Link as={Link} to="/student">PostStudent</Nav.Link>
  </Container>


</Navbar>


</>


)





}
export default Header