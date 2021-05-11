import React from 'react';
import './index.css'

const CadastroProfissional3 = () => {

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

                            <a href="/cadastroProfissional"><img className="botaoBackHomePessoal" src="https://media.discordapp.net/attachments/819577034530881567/841666319303704617/unknown.png" alt="" /></a>
                            <div className="primeiraLinhaTextos">
                            <img className="linhaSignup" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" width="130px" height="2px" />
                            <h1 className="signUph1Pessoal">Sign up</h1>
                            <img className="linhaSignup" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" width="130px" height="2px" />
                            </div>

                        </div>

                        <div className="inputsPessoais">

                            <div class="input-container">
                                <input id="ultimaempresa" class="input" type="text" pattern=".+" required />
                                <label class="label" for="ultimaempresa">Última Empresa</label>
                            </div>

                            <div class="input-container">
                                <input id="datadeinicio" class="input" type="text" pattern=".+" required />
                                <label class="label" for="datadeinicio">Data de Início</label>
                            </div>

                            <div class="input-container">
                                <input id="datafinal" class="input" type="text" pattern=".+" required />
                                <label class="label" for="datafinal">Data Final</label>
                            </div>

                            <div class="input-container">
                                <input id="cargo" class="input" type="text" pattern=".+" required />
                                <label class="label" for="cargo">Cargo</label>
                            </div>

                            <div class="input-container">
                                <input id="principaisfuncoes" class="input" type="text" pattern=".+" required />
                                <label class="label" for="principaisfuncoes">Descreva suas principais funções no cargo</label>
                            </div>

                        </div>

                        <a href="/choosesignup" class="botaoCadastro">Cadastrar</a>
                        
                    </div>



                </div>


            </div>

        </div>

    </div>

    )

}

export default CadastroProfissional3;