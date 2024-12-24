import React, { useState } from "react";
import "./style.css";
//import Form from "../../images/background.png"; Ajuste o caminho conforme necessário
//import Form from "./components/Form/Form";

function Form (){
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empreendimento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para um backend ou API
    console.log("Dados enviados:", formData);
    alert("Formulário enviado com sucesso!");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empreendimento: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastre-se para saber mais</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
        <select
          name="empreendimento"
          value={formData.empreendimento}
          onChange={handleChange}
          required
        >
          <option value="">Escolha uma opção</option>
          <option value="Empreendimento 1">Empreendimento 1</option>
          <option value="Empreendimento 2">Empreendimento 2</option>
          <option value="Empreendimento 3">Empreendimento 3</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
