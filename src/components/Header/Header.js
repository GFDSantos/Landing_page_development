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
