import {Container, Col} from 'react-bootstrap'
import Skill from './Skill'
import Header from '../Const/Header'

function Skills() {

    return ( 
        <div id='skills' className='mt-sm-3'>
            <Container className="d-flex align-items-center justify-content-center"  style={{height:'100vh'}}>
                <Col className='align-items-start' style={{width:'100%'}}>
                    <Header title={'My Skills'}/>
                    <Skill iconClassName={'fab fa-js'} progressValue={90}/>
                    <Skill iconClassName={'fab fa-java'} progressValue={89}/>
                    <Skill iconClassName={'fab fa-react'} progressValue={85}/>
                    <Skill iconClassName={'fab fa-html5'} progressValue={90}/>
                    <Skill iconClassName={'fab fa-css3'} progressValue={90}/>
                    <Skill iconClassName={'fab fa-bootstrap'} progressValue={85}/>
                    <Skill iconClassName={'fab fa-git'} progressValue={70}/>
                    <Skill iconClassName={'fab fa-python'} progressValue={65}/>
                </Col>
            </Container>
        </div>
    );
}

export default Skills;