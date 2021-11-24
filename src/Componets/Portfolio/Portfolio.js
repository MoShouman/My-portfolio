import {Container} from 'react-bootstrap'
import Project from './Project';
import Header from '../Const/Header'

function Portfolio() {
    return ( 
        <Container id='portfolio' className='mt-sm-3' style={{height:'100vh'}}>
            <Header title={`Projects I've Built`}/>  
            
            <Container className='p-2'>
                
                <Project projectName={'C-Store'} 
                         projectDesc={'An ecommerce web application that helps you to buy clothes online easily.'}
                         projectLinks={['https://github.com/MoShouman/C-Store','https://c-store.netlify.app/']}
                         tools={['React','Firebase','Bootstrap','Netlify']}
                         imgSrc={'../../imgs/shop-min.png'}
                         imgAlt={'c-store homepage'}
                />

                <Project projectName={'Cool Weather App'} 
                         projectDesc={'A web application that helps you to get min temperature, max temperature, how would it feels like, humidity, and wind.'}
                         projectLinks={['https://github.com/MoShouman/WeatherApp','https://coolweather-app.netlify.app/']}
                         tools={['React','openweathermap API','Bootstrap','Netlify']}
                         imgSrc={'../../imgs/searched-min-min.png'}
                         imgAlt={'coolweather app homepage'}
                />

            </Container>
        </Container>
    );
}

export default Portfolio;