import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function FAQ() {
  return (
  <div>
    <Navbar/>
    <div className="faq-container">
      <h1>Perguntas Frequentes (FAQ)</h1>

      <details>
        
        <summary>Como posso criar uma conta?</summary>
        <p>Para criar uma conta, siga os seguintes passos:</p>
        <ol>
          <li>Acesse a página de registro.</li>
          <li>Preencha o formulário com suas informações pessoais.</li>
          <li>Clique no botão "Registrar".</li>
        </ol>
      </details>

      <details>
        <summary>Como faço para redefinir minha senha?</summary>

        <p>Para redefinir sua senha, siga os seguintes passos:</p>
        <ol>
          <li>Acesse a página de redefinição de senha.</li>
          <li>Informe seu endereço de e-mail cadastrado.</li>
          <li>Verifique seu e-mail para obter instruções adicionais.</li>
        </ol>
      </details>
      <Footer/>
    </div>
    </div>
  );
}

export default FAQ;