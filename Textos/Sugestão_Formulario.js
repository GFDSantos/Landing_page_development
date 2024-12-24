//Com base na estrutura de diretório exibida e na imagem do formulário, vou sugerir a implementação do preenchimento e envio de formulário em React. Vou dividir a explicação em etapas, especificando onde cada arquivo ou código deve ser colocado.
//Etapa 1: Criar o componente do formulário
//No diretório src/components, crie uma nova pasta chamada Form. Dentro dela, adicione os arquivos Form.js e style.css.
//Código para Form.js:

import React, { useState } from 'react';
import './style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empreendimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para um backend ou API
    console.log('Dados enviados:', formData);
    alert('Formulário enviado com sucesso!');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empreendimento: '',
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

Código para style.css (dentro de src/components/Form):

.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.form-container h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.form-container input,
.form-container select,
.form-container button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-container button {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
}

.form-container button:hover {
  background-color: #0056b3;
}

Etapa 2: Adicionar o formulário na página principal

No arquivo src/Home.js, importe e adicione o componente de formulário.

Código para Home.js:

import React from 'react';
import Form from './components/Form/Form';

const Home = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default Home;

Etapa 3: Estilizar globalmente (opcional)
Se necessário, faça ajustes no arquivo App.css ou index.css para garantir que a página inteira tenha o layout desejado.
Exemplo:

body {
  font-family: Arial, sans-serif;
  background-image: url('/images/background.png'); /* Adicione um fundo, se necessário */
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 0;
}

Etapa 4: Testar o envio
1.	Suba a aplicação usando o comando npm start.
2.	Preencha o formulário e verifique no console do navegador se os dados aparecem corretamente.
3.	Integre com um backend ou API para salvar os dados enviados.

