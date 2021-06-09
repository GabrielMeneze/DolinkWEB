import React, { useState } from "react";
import { url } from '../../utils/constants';
import Header from "../../components/header";
import Footer from "../../components/footer"


const EditarProfissional = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const alterar = (event) => {
        event.preventDefault();

        fetch(`${url}professional/update`, {
            method: "PUT",
            body: JSON.stringify({
                nome: nome,
                email: email,
                telefone: telefone

            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('Empresa alterada')
                }else{
                    alert('Dados invalidos')
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="edit">
            <Header/>
            <div className="fields">
                <form className="form-cupom" onSubmit={alterar}>
                    <div className="form-group">
                        <div className="textarea">
                            <input
                                type="text"
                                name="nome"
                                value={nome}
                                className="form-control"
                                placeholder="Seu novo nome"
                                onChange={(event) => setNome(event.target.value)}
                            >
                            </input>
                        </div>
                        <div className="textarea">
                            <input
                                type="text"
                                name="email"
                                value={email}
                                className="form-control"
                                placeholder="seu novo email"
                                onChange={(event) => setEmail(event.target.value)}
                            >
                            </input>
                        </div>
                        <div className="textarea">
                            <input
                                type="text"
                                name="telefone"
                                value={telefone}
                                className="form-control"
                                placeholder="seu novo telefone"
                                onChange={(event) => setTelefone(event.target.value)}
                            >
                            </input>
                        </div>
                        <button
                            type="submit"
                            value="vcupom"
                            className="input-btn-vagas"
                        >Editar</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default EditarProfissional;