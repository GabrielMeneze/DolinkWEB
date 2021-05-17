import React, { useState } from "react"
import Header from "../../components/header";
import './index.css';



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


    const cadastrar = (event) => {
        event.preventDefault();

        fetch(url + "o caminho do cadastro vai aqui", {
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
                <h1>cadastrar vagas</h1>
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
                        </select>
                    </div>

                    <form className="form-cupom" onSubmit={cadastrar}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="titulo"
                                value={titulo}
                                className="form-control"
                                placeholder="Titulo"
                            >
                            </input>
                            <input
                                type="text"
                                name="faixasalarial"
                                value={faixasalarial}
                                className="form-control"
                                placeholder="Faixa salarial"
                            >
                            </input>
                            <input
                                type="text"
                                name="local"
                                value={local}
                                className="form-control"
                                placeholder="Local"
                            >
                            </input>
                            <input
                                type="text"
                                name="descricao"
                                value={descricao}
                                className="form-control"
                                placeholder="Descrição da vaga"
                            >
                            </input>
                            <input
                                type="text"
                                name="beneficios"
                                value={beneficios}
                                className="form-control"
                                placeholder="Beneficios"
                            >
                            </input>
                            <button
                                type="submit"
                                value="vcupom"
                                className="input-btn"
                            >Salvar</button>
                        </div>
                    </form>
                </div>

                <div className="utilss">
                    <div className="logovaga">
                        <form>
                            <input type="file" multiple={true} onChange={e => onFileChange(e.target.files)} />
                            <button class="button" onClick={handleClick}>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroDeVagas;
