import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Service from './components/Services/Service';
import WhyUs from './components/WhyUs/WhyUs';
import Clients from './components/Clients/Clients';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return ( 
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <WhyUs/>
      <Clients/>
      <Form/>
      <Footer/>
    </>
   );
}

export default App;