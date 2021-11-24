import './App.css';
import React, {Suspense, lazy} from 'react'
import NavBar from './Componets/NavBar'
import MainSection from './Componets/MainSection'
import FloatingBtn from './Componets/FloatingBtn';

const AboutUs = lazy(() => import('./Componets/AboutUs'))
const Skills = lazy(() => import('./Componets/Skills/Skills'))
const Experiences = lazy(() => import('./Componets/Experience/Experiences'))
const Portfolio = lazy(() => import('./Componets/Portfolio/Portfolio'))


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainSection/>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUs/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Skills/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experiences/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Portfolio/>
      </Suspense>
      <FloatingBtn/>
    </div>
  );
}

export default App;
