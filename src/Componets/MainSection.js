import {Container, Col, Row} from 'react-bootstrap'

function MainSection() {
    return ( 
        <div id='mainSection' style={{backgroundColor:'#333647'}}>
            <Container style={{height:'90vh'}}>
                <Row  className="d-flex align-items-center justify-content-center" style={{height:'100%'}}>
                        <Col sm={12} md={6}>
                            <h5>Hello!</h5>
                            <h1 style={{fontSize: '3.5rem', fontWeight:'700'}}>I'm Mohamed Ibrahim</h1>
                            <p style={{fontSize: '2rem', color: '#d3d2d0'}}>Frontend Developer | Software Engineer</p>
                            <p className="mb-5">Ambition is the path to success. Persistance is the vehicle you arrive in.<br/> -Bill Dradley</p>
                            <a className="HireMeBtn" href="#AboutUs">HireMe</a>
                        </Col>
                        <Col sm={12} md={6}>
                            <img alt='web development' style={{width:'100%', height:'100%'}} src='../../imgs/as-min.png'/>
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainSection;
