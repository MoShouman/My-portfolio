import {Container, Col, Row} from 'react-bootstrap'
import Header from './Const/Header';

function AboutUs() {
    return ( 
        <Container id='AboutUs' style={{height:'100vh'}}>
            <Row  className="d-flex align-items-center justify-content-center" style={{height:'100%'}}>
                    <Col>
                        <Header title={`Any type of questions & Discussion.`}/>
                        <p className="my-5" style={{fontSize: '1.3rem',color: '#d3d2d0'}}>Lets Talk <span style={{letterSpacing: '-5px',color: '#00cdcb', marginLeft:'15px'}}>————————————</span> </p>
                        <p style={{fontSize: '1.3rem',color: '#00cdcb'}}>
                            <i className="fa fa-github-square" style={{marginRight:'7px'}}></i>
                            <a href='https://github.com/MoShouman'>link</a>
                        </p>
                        <p style={{fontSize: '1.3rem',color: '#00cdcb'}}>
                            <i className="fa fa-linkedin" style={{marginRight:'7px'}}></i>
                            <a href='https://www.linkedin.com/in/moshouman/'>link</a>
                        </p>
                        <p style={{fontSize: '1.3rem'}}><i className="fa fa-whatsapp" style={{color: '#00cdcb'}}></i> (+20)1016350644</p>
                    </Col>
                    <Col>
                        <div style={{ lineHeight: '12px'}}>
                            <Header title={`About Me`}/>
                            <p className="my-5" style={{fontSize: '1.2rem',color: '#d3d2d0'}}>I am a Front-end web developer</p>
                            <p className="my-5" style={{fontSize: '1.2rem',color: '#d3d2d0'}}>Name : Mohamed Ibrahim </p>
                            <p className="my-5" style={{fontSize: '1.2rem',color: '#d3d2d0'}}>Email: muhammedebrahim00@gmail.com    </p>
                            <p className="my-5" style={{fontSize: '1.2rem',color: '#d3d2d0'}}>Lets Talk </p>
                        </div>
                        <a className="HireMeBtn" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1gQpgrHDrixlnK1qDjqzQ8kJwnnGvyetA/view?usp=sharing">Resume</a>
                    </Col>
            </Row>
        </Container>
     );
}

export default AboutUs;