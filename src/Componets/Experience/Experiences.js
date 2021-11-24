import {Container} from 'react-bootstrap'
import Header from '../Const/Header'
import Experience from './Experience'

function Experiences() {

    return ( 
        <div>
            <Container id='experience' className='mt-sm-3' style={{height:'100vh'}}>
                <Header title={'My Experience'}/>
                <Experience title={'Frontend Engineer'} 
                            typeOfJob={'Internship'}
                            duration={'Sep 2020 - Dec 2020 '}
                            description={["• Designed and developed a site's front-end.", "• Implemented the project requirements into the features Using Agile Methodology.", "• Developed using HTML5, CSS, Bootstrap, JavaScript, and Axios."]}
                />
            </Container>
        </div>
    );
}

export default Experiences;