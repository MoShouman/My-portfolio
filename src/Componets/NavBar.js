import {Navbar, Nav, Container} from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar id='navBar' style={{backgroundColor:'#333647'}} variant="dark" expand="lg">
            <Container>
                <Nav.Link href="/#navBar" className='name'>Mohamed Ibrahim</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className='d-flex justify-content-md-between w-100'>
                    <nav></nav>
                    <Nav>
                        <Nav.Link className="navbar-right" href="#AboutUs">About us</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="HireMeBtn" href="#AboutUs">HireMe</Nav.Link>
                    </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
}

export default NavBar;