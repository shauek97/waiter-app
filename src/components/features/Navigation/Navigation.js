
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const Navigation = () => {

    return (
    <Navbar bg="dark" >
        
            <Navbar.Brand as={NavLink} to='/' className="text-light mx-3">Waiter.app</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1">
                <Nav.Link as={NavLink} to='/' className="text-light mx-3">Home</Nav.Link>
            </Nav>
        
    </Navbar>
    )
}

export default Navigation;
