//App.js

import React from 'react';
import './App.css'; // Importa o arquivo de estilo principal
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaibaMais from "./components/Saibamais";
import Faleconosco from "./components/Faleconosco";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SaibaMais />} />
        <Route path="/contact" element={<Faleconosco />}/>
      </Routes>
    </Router>
  );
}

export default App;

//App.css

*{
  padding: 0;
  margin: 0;
}

.App{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//index.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


//Faleconosco.js

import Header from './Header/Header';
import Footer from './Footer/Footer';
import './style.css';

function Faleconosco() {
    return(
        <div className="body">
            <Header />
            <div className='faleconosco-body'>
                <b>Fale Conosco</b>
                <h1>Assessoria de Imprensa</h1>
                <p> E-mail: cury@maquinacohnwolfe.com</p>
                <h1>Cury Vendas RJ</h1>
                <p> Quitanda 86 - 7º andar Centro - Rio de Janeiro/RJ Telefone: (21) 3554-3350</p>
                <h1>Cury Vendas SP</h1>
                <p> Rua Robert Bosch, 544, Barra Funda - São Paulo/SP Telefone: (11) 3117-1313</p>
                <h1>Relacionamento</h1>
                <p> SP (11) 3117-1300 | - RJ (21) 3543- 6887 e 0800 314-9696 | De segunda-feira a sexta-feira das 09h às 16h.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Faleconosco;

//Home.js

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ImageGrid from "./ImageGrid";

function Home(){
    return(
        <div className="body">
        <Header />
        <ImageGrid />
        <Footer />
        </div>
    )
}

export default Home;

//ImageGrid.js

import React, { useEffect, useState } from 'react';
import './style.css';
// Uncomment the lines below if you decide to import images directly

import guanabara from "../images/baia-guanabara-residences.png";
import metropolitan from "../images/metropolitan-dream.png";
import orlaRecreio from "../images/orla-recreio.png";
import rioBranco from "../images/rio-branco.png";
import thePier from "../images/the-pier.png";
import orlaMaua from "../images/orla-maua.png"
import empreendimentosList from "./Helper/empreendimentos.json";

const imageMap = {
    "baia-guanabara-residences": guanabara,
    "metropolitan-dream": metropolitan,
    "orla-recreio": orlaRecreio,
    "rio-branco": rioBranco,
    "the-pier": thePier,
    "orla-maua": orlaMaua
};




function ImageGrid() {
    const [empreendimentos, setEmpreendimentos] = useState([]);

    useEffect(() => {
        setEmpreendimentos(empreendimentosList);
    }, []);

    return (
        <div className="image-grid">
            {empreendimentos.map((empreendimento) => (
                <div key={empreendimento.id} className="image-item">
                    <img src={imageMap[empreendimento.name]} alt={empreendimento.alt} />
                    <b>{empreendimento.text}</b>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;


//Saibamais.js

import React, { useEffect, useState } from 'react';
import './style.css';
// Uncomment the lines below if you decide to import images directly

import guanabara from "../images/baia-guanabara-residences.png";
import metropolitan from "../images/metropolitan-dream.png";
import orlaRecreio from "../images/orla-recreio.png";
import rioBranco from "../images/rio-branco.png";
import thePier from "../images/the-pier.png";
import orlaMaua from "../images/orla-maua.png"
import empreendimentosList from "./Helper/empreendimentos.json";

const imageMap = {
    "baia-guanabara-residences": guanabara,
    "metropolitan-dream": metropolitan,
    "orla-recreio": orlaRecreio,
    "rio-branco": rioBranco,
    "the-pier": thePier,
    "orla-maua": orlaMaua
};




function ImageGrid() {
    const [empreendimentos, setEmpreendimentos] = useState([]);

    useEffect(() => {
        setEmpreendimentos(empreendimentosList);
    }, []);

    return (
        <div className="image-grid">
            {empreendimentos.map((empreendimento) => (
                <div key={empreendimento.id} className="image-item">
                    <img src={imageMap[empreendimento.name]} alt={empreendimento.alt} />
                    <b>{empreendimento.text}</b>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;

//Footer.js

import React from "react";
import "./style.css"; // Importa o arquivo CSS

const Footer = () => {
  return (
    <footer>
      <p>2024 Cury Construtora - Todos os direitos reservados.</p>
      <nav>
        <ul>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Política de Privacidade</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;


//Footer.css


footer {
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
    color: #333;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ajuste conforme necessário */
}

footer {
  background-color: #f0f0f0;
  padding: 10px; /* Reduza o padding para diminuir a altura */
  text-align: center;
  font-size: 14px; /* Reduza o tamanho da fonte */
  margin-top: auto; /* Empurra o footer para o final */
}

  /* Para telas menores (e.g., smartphones) */
@media (max-width: 768px) {
    footer nav ul {
    flex-direction: column;
    }
    footer nav ul li {
    margin: 10px 0;
    }
}


//Header.js

import { Link } from 'react-router-dom';
import React from 'react';
import './style.css'; // Arquivo de estilos do Header
import logo from "../../images/logo_cury.png"; // Logo da construtora
import whatsappIcon from "../../images/whatsapp-icon.png"; // Caminho do ícone do WhatsApp

const Header = () => {
    return (
        <header className="header">
            {/* Logo */}
            <Link to="/">
                <img src={logo} alt="Logo Construtora Cury" className="logo" />
            </Link>

            {/* Navegação */}
            <nav className="center-nav">
                <Link to="/about" className="nav-link">Empreendimentos</Link>
                <Link to="/contact" className="nav-link">Faça o seu Cadastro</Link>
            </nav>

            {/* WhatsApp */}
            <a
                href="https://wa.me/5521991114000"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp"
            >
                <img src={whatsappIcon} alt="Ícone WhatsApp" />
                <span>WhatsApp</span>
            </a>
        </header>
    );
};

export default Header;


//style.css

/* src/components/Header.css */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c2bfc7; /* Roxo */
    padding: 10px 20px;
    position: relative; /* Para posicionamento absoluto no conteúdo */
}

.logo {
    height: 50px;
}

.center-nav {
    position: absolute; /* Centraliza os links */
    left: 40%; /* Alinha ao centro horizontalmente */
    transform: translateX(-50%); /* Ajusta para o centro exato */
    display: flex;
    gap: 20px;
}

.nav {
    display: flex;
    gap: 20px;
}

.nav-link {
    color: rgba(12, 12, 14, 0.934);
    text-decoration: none;
    font-weight: bold;
}

.nav-link:hover {
    text-decoration: underline;
}

.whatsapp {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #001006; /* Cor padrão do WhatsApp */
    font-weight: bold;
    text-decoration: none;
}

.whatsapp img {
    width: 24px; /* Tamanho do ícone do WhatsApp */
    height: 24px;
}

//empreendimentos.js

[
    { "id": 1, "name": "baia-guanabara-residences", "alt": "Baía Guanabara Residences", "text": "Baía Guanabana Residences" },
    { "id": 2, "name": "metropolitan-dream", "alt": "METROPOLITAN Dream", "text": "METROPOLITAN Dream" },
    { "id": 3, "name": "orla-recreio", "alt": "Orla Recreio Dream","text": "Orla Recreio" },
    { "id": 4, "name": "rio-branco", "alt": "Rio Branco 220","text":"Rio Branco 220" },
    { "id": 5, "name": "the-pier", "alt": "The PIER", "text":"The PIER" },
    { "id": 6, "name": "orla-maua", "alt": "Orla Mauá","text":"Orla Maua" }
]



