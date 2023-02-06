import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
    
         <img src={logo} width="40px" height="40px" />{}
          C-rocuant
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="productos">
              <NavDropdown.Item href="#futuro sub pag">Te</NavDropdown.Item>
              <NavDropdown.Item href="#futuro sub pag">Cafe</NavDropdown.Item>
              <NavDropdown.Item href="#futuro sub pag">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#futuro sub pag">Promo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="##futuro sub pag">Quienes somos</Nav.Link>
            <Nav.Link href="##futuro sub pag">Locales</Nav.Link>
            <Nav.Link href="##futuro sub pag">Contactanos Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <div className="content">
        futura cards
      </div>
    </div>
  );
}

export default App;
