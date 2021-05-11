import React from 'react';
import './index.css';

const CadastroProfissional = () => {

    return(
        
        <div>
            
            <div className="body2">

                <div className="sectionLargura2">


                    <div className="sectionImagePessoal">

                        <img src="https://media.discordapp.net/attachments/819577034530881567/841297659721678848/unknown.png?width=845&height=939" alt="" />

                    </div>

                    <div className="sectionDadosPessoais">


                        <div className="middleSectionPessoal">

                            
                            <div className="primeiraLinhaSignup">

                                <a href="/choosesignup"><img className="botaoBackHomePessoal" src="https://media.discordapp.net/attachments/819577034530881567/841290681486147624/unknown.png" alt="" /></a>
                                <div className="primeiraLinhaTextos">
                                <img className="linhaSignup" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" width="130px" height="2px" />
                                <h1 className="signUph1Pessoal">Sign up</h1>
                                <img className="linhaSignup" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" width="130px" height="2px" />
                                </div>

                            </div>

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

                        <a href="/cadastroProfissional2"><img className="goesToNext" src="https://media.discordapp.net/attachments/819577034530881567/841291019864637460/unknown.png" alt="" /></a>
                            
                        </div>



                    </div>


                </div>

            </div>

        </div>

    )

}

export default CadastroProfissional;