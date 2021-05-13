import Header from "../../components/header";
import Footer from "../../components/footer";
import './index.css';
import React from "react"



const CadastroDeVagas = () => {
    return (
        <div className="main">
            <Header />
            <div className="titulo">
                <hr className="linha" />
                <h1>cadastrar vagas</h1>
                <hr className="linha" />
            </div>

            <div className="controle">
                <div className="inputsPessoais">

                    <div class="input-container">
                        <input id="name" class="input" type="text" pattern=".+" required />
                        <label class="label" for="name">Nome</label>
                    </div>

                    <div class="input-container">
                        <input id="cpf" class="input" type="text" pattern=".+" required />
                        <label class="label" for="cpf">CPF</label>
                    </div>

                    <div class="input-container">
                        <input id="cep" class="input" type="text" pattern=".+" required />
                        <label class="label" for="cep">CEP</label>
                    </div>

                    <div class="input-container">
                        <input id="telefone" class="input" type="text" pattern=".+" required />
                        <label class="label" for="telefone">Telefone</label>
                    </div>

                    <div class="input-container">
                        <input id="email" class="input" type="text" pattern=".+" required />
                        <label class="label" for="email">Email</label>
                    </div>

                    <div class="input-container">
                        <input id="senha" class="input" type="text" pattern=".+" required />
                        <label class="label" for="senha">Senha</label>
                    </div>

                </div>

                <div className="controle2">
                    <div className="upload">
                        <p>selecione logo para sua vaga</p>
                        <button>Upload</button>
                    </div>
                    <div className="selecionador">
                        <button>selecione a linguagem de programação</button>
                    </div>
                    <div className="listaDasEscolidas">
                        <p>c#</p>
                        <p>node.js</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CadastroDeVagas;