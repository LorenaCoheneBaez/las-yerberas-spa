import './style/index.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Btnwhatsapp from './components/Btnwhatsapp';
import Btninsta from './components/Btninsta';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Header/>
      <main>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/services" element={ <Services/>}/>
            <Route path="/about" element={ <About/>}/>
            <Route path="/contact" element={ <Contact/>}/>
            <Route path="/*" element={ <Error/>}/>
        </Routes>
      <Btnwhatsapp/>
      <Btninsta/>
      </main>
        </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
