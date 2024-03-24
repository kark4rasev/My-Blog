import './App.css';
import "./assets/js/script";
import Header from './Components/Header/Header';
import Newsletter from './Components/Newsletter/Newsletter';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import WorkProcess from './Components/WorkProcess/WorkProcess';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return(
   <div className="App">
   <Header />
   <Services />
   <Work />
   <WorkProcess />
   <Newsletter />
   <About />
   <Testimonials />
   <Contact />
   <Footer />
   </div>
  );
}

export default App;
