import { useEffect, useRef, useState } from "react";

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";

import Header from './components/Header'
import Home from "./Home"
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import RoomsDetail from './components/RoomsDetail';
import Contact from './components/Contact';
import Booking from './components/Booking';
function App() {
  // motor de reserva
  const location = useLocation();

  const [showBooking, setShowBooking] = useState(false);
  const [showWpp, setShowWpp] = useState(false);
  // const navigate = useNavigate(); // Obtenemos la ruta actual
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  useEffect(() => {
    const handleScrollBooking = () => {
      if (window.scrollY > 50) {
        setShowWpp(true)
        setShowBooking(true); // Si el usuario baja más de 50px, activa el header
      } else {
        setShowWpp(true)
        setShowBooking(false); // Si está en la parte superior, quita el efecto
      }
    };

    window.addEventListener("scroll", handleScrollBooking);

    return () => {
      window.removeEventListener("scroll", handleScrollBooking);
    };
  }, []);
  return (
    <>
      {/* <Router> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/habitaciones" element={<Rooms />} />
        <Route path="/habitaciones/:id" element={<RoomsDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/booking-rooms" element={<Booking />} />
      </Routes>
      <div className='overlay-active'></div>
      <Footer />
      {(!isDesktop && location.pathname === "/") && (
        <>
            <div className={`booking-engine ${showBooking ? "active" : ""}`}>
              <a href="/booking-rooms">RESERVAR</a>
            </div>
        </>
      )}
      {/* </Router> */}
      {showWpp && (
        <div className="elfsight-app-67c75af3-bbc9-41c7-b2f3-ba7789c043a3" data-elfsight-app-lazy></div>
      )}
    </>
  )
}

export default App
