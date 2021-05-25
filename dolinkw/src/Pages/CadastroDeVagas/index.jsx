import React, { useState } from "react"
import Header from "../../components/header";
import Footer from "../../components/footer"
import "./index.css";



const CadastroDeVagas = () => {

    const [images, setImages] = useState([]);

    const onFileChange = (files) => {
        setImages(f => [...f, ...files]);
    };

    const handleClick = (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {

            formData.append(`images`, images[i]);
        }

        fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/', {
            body: formData,
            method: "POST"
        }).then(res => console.log(res));
    };

    const [titulo, setTitulo] = useState("");
    const [faixasalarial, setFaixasalarial] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [beneficios, setBeneficios] = useState("");

    const cadastrar = (event) => {
        event.preventDefault();

        fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/usuario', {
            method: "POST",
            body: JSON.stringify({
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
                if (response.ok) return response.json();

                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
            })
            .catch((err) => console.error(err));
    };


    return (
        <div className="main">
            <Header />
            <div className="titulo">
                <hr className="linha" />
                <div className="esp"></div>
                <h1>cadastrar vagas</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>
            <div className="controle">

                <div className="fields">
                    <div className="fild">
                        <select class="form-select" aria-label="Default select example">
                            <option selected >Selecionar Vaga</option>
                            <option value="1">Cientista de dados</option>
                            <option value="2">Desenvolvedor de Sistemas</option>
                            <option value="3">Desenvolvedor Front-End</option>
                            <option value="4">Desenvolvedor Back-End</option>
                            <option value="5">Desenvolvedor Full-Stack</option>
                            <option value="6">Estagio de TI</option>
                            <option value="7">Engenheiro de software</option>
                            <option value="8">Devops</option>
                            <option value="9">Engenheiro de testes</option>
                            <option value="10">Analista de segurança</option>
                        </select>
                    </div>

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
                                className="input-btn"
                            >cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className="utilss">
                    <div className="logovaga">
                        <form>

                            <label For="arquivo">Logo da empresa</label>
                            <input type="file" alt="escolha a logo da empresa" id="arquivo" multiple={true} onChange={e => onFileChange(e.target.files)} />

                        </form>

                        <button class="button" onClick={handleClick}>Upload</button>
                    </div>


                    <input type="search" class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
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
            <Footer />
        </div>
    )
}

export default CadastroDeVagas;
