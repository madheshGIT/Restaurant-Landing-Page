import './App.css';
import About from './components/About';
import Home from './components/Home';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
