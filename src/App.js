
import './App.css';
import Contact from './components/ContactUs/Contact';
import OverValue from './components/OurValue/OverValue';
import Residencies from './components/Residencies/Residencies';
import Compani from "./components/companies/Compani"
import Header from './components/headers/Header';
import Hero from './components/hero/Hero';
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Compani/>
      <Residencies/>
      <OverValue/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
