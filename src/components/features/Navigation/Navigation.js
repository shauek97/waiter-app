
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap'


const Navigation = () => {

    return (
    <Navbar bg="dark" >
        
            <Navbar.Brand href="/" className="text-light mx-3">Waiter.app</Navbar.Brand>
            <Nav className="justify-content-end flex-grow-1">
                <Nav.Link href="/" className="text-light mx-3">Home</Nav.Link>
            </Nav>
        
    </Navbar>
    )
}

export default Navigation;
