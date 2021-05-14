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
                </div>

                <div className="utilss">
                    <div className="logovaga">
                        <form>
                            <input type="file" multiple={true} onChange={e => onFileChange(e.target.files)} />
                            <button onClick={handleClick}>Upload</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroDeVagas;