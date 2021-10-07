import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar';
import Header from './components/header';
import Particles from 'react-particles-js';
import AboutMe from "./components/aboutme";
import Info from "./components/info";



function App() {
  return (
    <>
      <Particles
      className = "particles-canvas"
      params = {{ 
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type:"star",
            stroke: {
                width: 2,
                color: "#f9ab00"
            }
          }
        }
        }}/>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Info/>
  </>
  );
}

export default App;
