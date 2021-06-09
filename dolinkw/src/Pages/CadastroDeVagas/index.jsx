import React, { useState } from "react"
import {  useHistory  } from 'react-router-dom';
import Header from "../../components/header";
import Footer from "../../components/footer"
import jwtDecode from 'jwt-decode';
import "./index.css";



const CadastroDeVagas = () => {

    const history = useHistory();

    const token = localStorage.getItem('token-dolink'); 
    
    const idEmpresa = jwtDecode(token).Id;

    const [titulo, setTitulo] = useState("");
    const [faixasalarial, setFaixasalarial] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [beneficios, setBeneficios] = useState("");

    const cadastrar = (event) => {
        event.preventDefault();

        //44348 (CASA - TOSHI)
        //44383 (SENAI - TOSHI)
        fetch('https://localhost:44383/v1/vagancy/create', {
            method: "POST",
            body: JSON.stringify({
                idEmpresa: idEmpresa,
                titulo: titulo,
                faixasalarial: faixasalarial,
                local: local,
                descricao: descricao,
                beneficios: beneficios,

            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('Vaga Cadastrada!');
                    history.push('/ListagemVagas')
                } else {
                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
                }
            })
            .catch((err) => console.error(err));
    };


    return (
        <div className="main">
            <Header />
            <div className="titulo">
                <hr className="linha" />
                <div className="esp"></div>
                <h1>Cadastrar Vagas</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>
            <div className="controle">

                <div className="fields">
                    <form className="form-cupom" onSubmit={cadastrar}>
                        <div className="form-group">
                            <div className="textarea">
                                <input
                                    type="text"
                                    name="titulo"
                                    value={titulo}
                                    className="form-control"
                                    placeholder="Titulo"
                                    onChange={(event) => setTitulo(event.target.value)}
                                >
                                </input>
                            </div>
                            <div className="textarea">
                                <input
                                    type="text"
                                    name="faixasalarial"
                                    value={faixasalarial}
                                    className="form-control"
                                    placeholder="Faixa Salarial"
                                    onChange={(event) => setFaixasalarial(event.target.value)}
                                >
                                </input>
                            </div>
                            <div className="textarea">
                                <input
                                    type="text"
                                    name="local"
                                    value={local}
                                    className="form-control"
                                    placeholder="Local"
                                    onChange={(event) => setLocal(event.target.value)}
                                >
                                </input>
                            </div>
                            <div className="textarea">
                                <input
                                    type="text"
                                    name="descricao"
                                    value={descricao}
                                    className="form-control"
                                    placeholder="Descrição da vaga"
                                    onChange={(event) => setDescricao(event.target.value)}
                                >
                                </input>
                            </div>
                            <div className="textarea">
                                <input
                                    type="text"
                                    name="beneficios"
                                    value={beneficios}
                                    className="form-control"
                                    placeholder="Beneficios"
                                    onChange={(event) => setBeneficios(event.target.value)}
                                >
                                </input>
                            </div>
                            <button
                                type="submit"
                                value="vcupom"
                                className="input-btn-vagas"
                            >Cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className="utilss">

                    <input type="search" class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Selecione as skills da vaga..." />
                    <datalist id="datalistOptions">
                        <option value="C#" />
                        <option value=".NET" />
                        <option value="Java" />
                        <option value="Javascript" />
                        <option value="HTML" />
                        <option value="CSS" />
                        <option value="Ruby" />
                        <option value="Lua" />
                        <option value="Reat.js" />
                        <option value="Angular" />
                        <option value="Python" />
                        <option value="Swift" />
                        <option value="PHP" />
                        <option value="C" />
                        <option value="C++" />
                        <option value="Perl" />
                        <option value="Assembly" />
                        <option value="Ruby" />
                        <option value="Objective-C" />
                        <option value="Jquery" />
                        <option value="TypeScript" />
                        <option value="Shell" />
                        <option value="Haskell" />
                        <option value="Kotlin" />
                        <option value="Scala " />
                    </datalist>


                </div>
            </div>
            <Footer className="rodapeVagas" />
        </div>
    )
}

export default CadastroDeVagas;
