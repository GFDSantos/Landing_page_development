import React, { useEffect, useState } from 'react';
import './style.css';
// Uncomment the lines below if you decide to import images directly

import orlaMaua from "../images/orla-maua.png";
import guanabara from "../images/baia-guanabara-residences.png";
import orlaRecreio from "../images/orla-recreio.png";
import metropolitan from "../images/metropolitan-dream.png";
import thePier from "../images/the-pier.png";
import rioBranco from "../images/rio-branco.png";


import empreendimentosList from "./Helper/empreendimentos.json";

const imageMap = {
    "orla-maua": orlaMaua,
    "baia-guanabara-residences": guanabara,
    "orla-recreio": orlaRecreio,
    "metropolitan-dream": metropolitan,
    "the-pier": thePier,
    "rio-branco": rioBranco,


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