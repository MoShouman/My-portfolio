import {Row, Col, Badge} from 'react-bootstrap'

const pStyle = {
    fontSize: '1.5rem',
    color:'#d3d2d0',
    display:'inline'
}


function Experience({title, typeOfJob, duration, description}) {
    return ( 
         <Row style={{backgroundColor:'#333647'}} className='p-2'>
            <Col className='d-flex justify-content-between'>
                <p style={{  fontSize: '1.5rem'}}>{title}, <Badge bg="info">{typeOfJob}</Badge></p>
                <p style={pStyle}>{(duration)}</p>
            </Col>
            {
                description.map((line,index) => (
                    <p key={index} style={{fontSize: '1.3rem', color:'#d3d2d0'}}>
                        {line}
                    </p>
                ))
            }
        </Row> 
    );
}

export default Experience;