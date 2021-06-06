import React from 'react'
import Header from '../../components/header';
import Rodape from '../../components/footer';

const ListagemVagas = () => {

    const cadastrar = (event) => {
        event.preventDefault();

        fetch('https://localhost:44348/v1/vagancy/create', {
            method: "LIST",
            body: JSON.stringify({

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
                }
                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
            })
            .catch((err) => console.error(err));
    };

    return(
        <div className="main">
            <h1>teste</h1>
        </div>
    )

}

export default ListagemVagas;