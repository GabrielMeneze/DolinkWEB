import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer"
import LogoVaga from '../../imgs/Logovaga.png'
import "./index.css";




const EditarVagas = () => {

    const [titulo, setTitulo] = useState("");
    const [faixasalarial, setFaixasalarial] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [beneficios, setBeneficios] = useState("");


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



    const alterar = (event) => {
        event.preventDefault();

        fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/usuario', {
            method: "UPDATE",
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
                if (response.ok) {
                    console.log(response.json());
                    alert('Vaga alterada')
                }

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
            <div className="imagem">
                <img src={LogoVaga} alt="Logo da vaga da empresa" />
            </div>
            <div className="logovaga">
                <form>

                    <label For="arquivo">escolha a logo da empresa</label>
                    <input type="file" alt="escolha a logo da empresa" id="arquivo" multiple={true} onChange={e => onFileChange(e.target.files)} />

                </form>

                <button class="button" onClick={handleClick}>Upload</button>
            </div>
            <form className="form-cupom" onSubmit={alterar}>
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
                            >Salvar Alterações</button>
                        </div>
                    </form>
                    <Footer/>
        </div>
    );
}

export default EditarVagas;