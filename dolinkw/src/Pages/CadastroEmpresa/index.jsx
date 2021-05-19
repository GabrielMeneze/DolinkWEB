import './index.css';
import React from "react"

const CadastroEmprsa = () => {
    return (

        <div>

            <div className="body2">

                <div className="sectionLargura2">

                    <div className="sectionImagePessoal">

                        <img src="https://media.discordapp.net/attachments/819577034530881567/841297659721678848/unknown.png?width=845&height=939" alt="" />

                    </div>

                    <div className="sectionDadosPessoais">

                        <div className="middleSectionPessoal">

                            <div className="infos">

                                <div className="h1Pessoal1">

                                    <h1 className="h1Pessoal1">Sign Up!</h1>

                                </div>

                                <div className="infotext">

                                    <input type="text" class="form-control" placeholder="Nome da Empresa" />

                                </div>

                                <div className="infotext">

                                    <input type="text" class="form-control" placeholder="CNPJ" />

                                </div>

                                <div className="infotext">

                                    <input type="text" class="form-control" placeholder="Nome do Recrutador" />

                                </div>

                                <div className="infotext">

                                    <input type="text" class="form-control" placeholder="Telefone com DDD (Ex: 11 99999-9999)" />

                                </div>

                                <div className="infotext">

                                    <input type="text" class="form-control" placeholder="Email" />

                                </div>

                                <div className="infotext">
                                    
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"/>

                                </div>

                                
                                <div className="cadastrar1">

                                    <a className="linkCadastro">Já possui cadastro?</a> 

                                    <a className="loginLink1" href="">Login</a>

                                </div>

                                <div className="btn1">

                                    <a href="/CadastroEmpresa"      class="cadastroEmpresa">
                                    Cadastrar-se
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>
                
                </div>

            </div>

        </div>

    )

}
export default CadastroEmprsa;