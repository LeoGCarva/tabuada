import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Sequence from "./Sequence";
import Random from "./Random";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Tabuada</Link>
        <p>Aprenda e decore todas tabuadas do 2 ao 12</p>
      </header>

      <nav>
        <Link to="/sequence">Sequencia</Link>
        <Link to="/random">Aleatorio</Link>
      </nav>

      <Routes>
        <Route path="/" element={<p>Escolha um modo acima para começar.</p>} />
        <Route path="/sequence" element={<Sequence />} />
        <Route path="/random" element={<Random />} />
        <Route path="*" element={<p>Página não encontrada.</p>} />
      </Routes>
    </BrowserRouter>
  );
}
