import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home.pages'
import Login from "./pages/login.pages";
import PlanillaPages from "./pages/planilla.pages";
import PlanillaEPages from "./pages/entrenadores.pages";
import FixturePages from "./pages/fixture.pages";
import CategoriasPages from "./pages/categorias.pages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planilla-jugadores" element={<PlanillaPages />} />
        <Route path="/planilla-entrenadores" element={<PlanillaEPages />} />
        <Route path="/fixture" element={<FixturePages/>} />
        <Route path="/categorias" element={<CategoriasPages/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
