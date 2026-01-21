import WhatsAppButton from "./components/WhatsAppButton";
// 1. Removi o "path" que não existe no import e adicionei o BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/footer";

// 2. Importe com a primeira letra MAIÚSCULA
import Galeria from "./components/Galeria";

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Orcamento from "./pages/Orcamento";
import Contato from "./pages/Contato";
import Oportunidade from "./pages/Oportunidade";

export default function App() {
  return (
    // 3. Tudo precisa estar dentro do <Router> para os links funcionarem
    <Router>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeria" element={<Galeria />} />
        <Route path="/Equipe" element={<Equipe />} />
        <Route path="/Orcamento" element={<Orcamento />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Oportunidade" element={<Oportunidade />} />
        {/* 4. Use Galeria com G maiúsculo aqui também */}
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  );
}
