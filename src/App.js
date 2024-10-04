import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Service from './components/Service';
import LandingPage from './components/LandingPage';
import ShopMap from './components/ShopMap';
import Gallery from "./components/Gallery"
import { useEffect, useRef, useState } from 'react';
import Loading from './components/Loading';


function App() {
  const onlineConsultRef = useRef();
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 6800)
  }, [])
  return loading ? (<Loading/>):(
    <BrowserRouter>
    <div className="App">
    <Navbar onlineConsultRef={onlineConsultRef}/> 
      <Routes>
        <Route path="/" element={<LandingPage onlineConsultRef={onlineConsultRef} />} />
        <Route path="/service" element={<Service />} />
        <Route path="/direction" element={<ShopMap />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
