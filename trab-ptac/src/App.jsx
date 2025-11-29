import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Reservation from "./pages/Reservation/Reservation";
import LandingPage from "./pages/LandingPage/LandingPage";
import ListarReservas from "./pages/ListarReservas/listarReservas";
import ConsultarMesas from "./pages/consultarMesa/ConsultarMesas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/consultar-mesas" element={<ConsultarMesas/>} />
         <Route path="/listar-reservas" element={<ListarReservas />} />


      </Routes>
    </Router>
  );
}

export default App;
