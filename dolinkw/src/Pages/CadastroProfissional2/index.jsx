import React from 'react';
import './index.css'

const CadastroProfissional2 = () => {

    return (

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
                                <input id="linkedin" class="input" type="text" pattern=".+" required />
                                <label class="label" for="linkedin">Linkedin</label>
                            </div>

                            <div class="input-container">
                                <input id="github" class="input" type="text" pattern=".+" required />
                                <label class="label" for="github">GitHub</label>
                            </div>

                            <div class="input-container">
                                <input id="sobremim" class="input" type="text" pattern=".+" required />
                                <label class="label" for="sobremim">Sobre Mim</label>
                            </div>

                        </div>

                    <a href="/cadastroProfissional3"><img className="goesToNext" src="https://media.discordapp.net/attachments/819577034530881567/841291019864637460/unknown.png" alt="" /></a>
                        
                    </div>



                </div>


            </div>

        </div>

    </div>

    )

}

export default CadastroProfissional2;