import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../../components/header';
import Rodape from '../../components/footer';
import { Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import empresaServico from '../../servicos/empresaServico';
import { useFormik } from 'formik';

const ListagemVagas = () => {

    const [titulo, setTitulo] = useState('');
    const [faixaSalarial, setFaixaSalarial] = useState('');
    const [local, setLocal] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [vagas, setVagas] = useState([]);

    const token = localStorage.getItem('token-dolink');

    useEffect(() => {

        listarVagas();

    }, []);

    const listarVagas = () => {
        empresaServico
            .listarvagas()
            .then(resultado => {
                setVagas(resultado.data.data);
            })
            .catch(erro => {
                console.error(`erro ${erro}`);
            })

    }


    return (

        <div className="englobatudoNaPaginiaListagemDeVagas">
            <Header />

            <div className="titulo">
                <hr className="linha" />
                <div className="esp"></div>
                <h1>Vagas Cadastradas</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>

            <main>
                <div className="estilizacaoDePaginaListagemVaga">

                    <div className="FiltoDeVagasListagem">
                    </div>

                    <div className="sectionDeCardsDasVagas">

                        {
                            vagas.filter(item => jwtDecode(token).Id === item.empresa).map((item, index) => {
                                return (
                                    <div >

                                        <Link className="LinkDeCardsDeVagaListagemdeVagas" src="/ListagemVagaEspecifica" to={{ pathname : '/ListagemVagaEspecifica', state : {IdVaga : item.id} }} key={index}>
                                            <div className="cardsDeVagas">
                                                <div className="cardiparaEstilizacaoDeListagemDeVaga">
                                                    <p className="TituloCardaVagas">{item.titulo}</p>
                                                    <p style={{ 'margin-bottom': '0.6em', 'maxWidth' : '95%'  }}>Descrição: {item.descricao}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Local: {item.local}</p>
                                                    <div className="localeFaixaSalarialCard">
                                                        <p style={{ 'margin-bottom': '0.6em' }}>Faixa Salarial: R${item.faixaSalarial}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            <Rodape />
        </div>

    )

}

export default ListagemVagas;