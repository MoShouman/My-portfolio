import {Col, Row} from 'react-bootstrap'

function Project({projectName, projectDesc, tools, projectLinks, imgSrc, imgAlt}) {
    return ( 
        <Row className='my-4'>
            <Col md={6}>
                <p style={{fontSize: '1.6rem', fontWeight:'bold'}}>{projectName}</p>    
                <div className='p-2' style={{backgroundColor:'#333647'}}>
                    <p style={{fontSize: '1.2rem', color:'rgb(211, 210, 208)'}}>{projectDesc}</p>    
                </div>
                <div className=' my-3'>
                    {
                        tools.map((tool, index)=>(
                            <p key={index} className='d-inline mx-3' style={{fontSize: '1rem', color:'rgb(211, 210, 208)'}}>{tool}</p>    
                        ))
                    }    
                </div>
                <div className=' my-3'>
                    <p className='d-inline mx-3' style={{fontSize: '1.4rem', color:'rgb(211, 210, 208)'}}>
                        <a href={projectLinks[0]} rel="noreferrer" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </p>    
                    <p className='d-inline mx-3' style={{fontSize: '1.4rem', color:'rgb(211, 210, 208)'}}>
                        <a href={projectLinks[1]} rel="noreferrer" target="_blank">
                            <i className="fas fa-link"></i>
                        </a>
                    </p>    
                </div>
            </Col>
            <Col md={6}>
                <img src={imgSrc} style={{width:'100%', height:'100%'}} alt={imgAlt} loading='lazy'/>
            </Col>
        </Row>

    );
}

export default Project;