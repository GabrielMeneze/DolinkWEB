import React, { useState } from 'react';
import "./index.css";

const AlterarSenha = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [conf, setConf] = useState("");

    const alterar = (event) => {
        event.preventDefault();

        fetch('https://localhost:44338/v1/account/update/password', {
            method: "PUT",
            body: JSON.stringify({
                senha: senha,
                email: email,
                conf: conf,

            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('senha alterada')
                }
            })
            .catch((err) => console.error(err));
    };

    return (

        <div>
            <form className="form-cupom" onSubmit={alterar}>
                <div className="bodyAlterar">
                    <div className="sectionImageAlterar">
                        <img className="alterarImage" src="https://cdn.discordapp.com/attachments/753442698257498163/855977945825673226/unknown.png" alt="" />
                    </div>
                    <div className="sectionContentAlterar">
                        <div className="middleSectionAlterar">
                            <div className="firstLinhaAlterar">
                                <img className="linhasSignin" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" />
                                <h1>Recupere sua senha aqui!</h1>
                                <img className="linhasSignin" src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" />
                            </div>
                            <p>Informe os dados para que possamos atualizá-los!</p>
                            <div className="secondLinhaAlterar">                              
                                <div className="textarea">
                                    <input
                                        type="password"
                                        name="senha1"
                                        value={senha}
                                        className="form-control"
                                        placeholder="Informe sua senha"
                                        onChange={(event) => setSenha(event.target.value)}>
                                    </input>
                                </div>
                                <div className="textarea">
                                    <input
                                        type="password"
                                        name="conf1"
                                        value={conf}
                                        className="form-control"
                                        placeholder="Confirme sua nova senha"
                                        onChange={(event) => setConf(event.target.value)}>
                                    </input>
                                </div>
                                <div className="btn">
                                    <button
                                        name="alterar"
                                        type="submit"
                                        value="vcupom"
                                        className="input-btn-vagas"
                                    >Atualizar!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )

}

export default AlterarSenha;