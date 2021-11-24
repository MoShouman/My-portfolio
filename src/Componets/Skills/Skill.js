import {Col, Row, ProgressBar} from 'react-bootstrap'

function Skill({iconClassName, progressValue}) {

    const iconStyle = {
        fontSize:'2.5rem',
        color:'#00cdcb',
        display:'contents'
    }

    return ( 
        <Row className='my-4 mx-3 align-items-center justify-content-between'>
            <Col>
                <i style={iconStyle} className={iconClassName}></i>
            </Col>
            <Col sm={12} md={10}>
                <ProgressBar now={progressValue} />
            </Col>          
        </Row>
    );
}

export default Skill;