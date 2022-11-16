import Navbar from "./components/Navbar/Navbar"
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Contacto from "./components/pages/Contacto";
import Footer from "./components/Footer/Footer";
import Accesorios from "./components/pages/Accesorios";
import Celulares from "./components/pages/Celulares";


function App() {
  return (
    <>

      <Navbar />
    
      <div className="container" background-color="#3234">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/accesorios" element={<Accesorios/>} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
    
      
      </div>
      <Footer/>
    </>
  )
}

export default App
