import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import BusinessInfo from './components/BusinessInfo';
import MapBox from './components/Map';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App ">
        <Header />
        <Hero />
        <Info />
        <BusinessInfo />
        <MapBox />
        <Contact />
    </div>
    
  );
}

export default App;
