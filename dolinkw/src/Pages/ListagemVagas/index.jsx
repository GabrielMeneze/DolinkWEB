import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../../components/header';
import Rodape from '../../components/footer';
import { Table, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import empresaServico from '../../servicos/empresaServico';
import {url} from '../../utils/constants';
import { useFormik } from 'formik';

const ListagemVagas = () => {

    const [titulo, setTitulo] = useState('');
    const [faixaSalarial, setFaixaSalarial] = useState('');
    const [local, setLocal] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [vagas, setVagas] = useState([]);

    const [termo, setTermo] = useState('')

    const token = localStorage.getItem('token-dolink');
    const idEmpresa = jwtDecode(token).Id;

    useEffect(() => {

        listarVagas()
        // buscarTitulo()


    }, []);

    

    const listarVagas = () => {
        empresaServico
            .listarvagas(idEmpresa)
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

            <div className="tituloMatch">
                <hr className="linha" />
                <div className="esp"></div>
                    <h1>Vagas Cadastradas</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>

            <div className="sectionCampoBuscaVagas">

                <input className="campoBuscaVagas" 
                    placeholder="Digite o título da vaga..." 
                    onChange={event => { setTermo(event.target.value) }}
                />

                <button type="submit"><img src="https://media.discordapp.net/attachments/819577034530881567/855104124848177172/unknown.png" alt="" /></button>
            </div>

            <main>
                <div className="estilizacaoDePaginaListagemVaga">

                    <div className="FiltoDeVagasListagem">

                        <div className="sectionFiltroPrincipal">
                            <div className="filtroBuscaVaga">
                                <h3>Filtro de Busca</h3>
                            </div>

                            <div className="sectionFiltroRegiao">
                                <h4>Região</h4>
                                <input type="text" placeholder="Informe a região da vaga"/>
                            </div>

                            <div className="sectionFiltroBeneficios">
                                <h4>Faixa Salarial</h4>
                                <input type="text" placeholder="Informe o salário da vaga" />
                            </div>

                            <div className="sectionBotaoFiltro">
                                <button type="submit">Aplicar!</button>
                            </div>
                        </div>

                    </div> 
                
                    
                    <div className="sectionDeCardsDasVagas">
                        {
                            vagas.filter((item) => {
                                if (termo == "") {
                                    return item
                                } else if (item.titulo.toLowerCase().includes(termo.toLowerCase())) {
                                    return item
                                }
                                }).map((item) => {
                                    return (
                                        <div className="LinkDeCardsDeVagaListagemdeVagas" >
                                            <div className="cardsDeVagas">
                                                <div className="cardiparaEstilizacaoDeListagemDeVaga">
                                                    <p className="TituloCardaVagas">{item.titulo}</p>
                                                    <p style={{ 'margin-bottom': '0.6em', 'maxWidth' : '95%'  }}>Descrição: {item.descricao}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Local: {item.local}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Faixa Salarial: R${item.faixaSalarial}</p>                                      
                                                <button className="botaoVerVaga"><Link to={{ pathname : '/ListagemVagaEspecifica', state : {IdVaga : item.id} }}>Ver Matchs</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
            
                            


                        {/* {
                            vagas.filter(item => jwtDecode(token).Id === item.empresa).map((item, index) => {

                                return (
                                
                                        <div className="LinkDeCardsDeVagaListagemdeVagas" key={index}>
                                            <div className="cardsDeVagas">
                                                <div className="cardiparaEstilizacaoDeListagemDeVaga">
                                                    <p className="TituloCardaVagas">{item.titulo}</p>
                                                    <p style={{ 'margin-bottom': '0.6em', 'maxWidth' : '95%'  }}>Descrição: {item.descricao}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Local: {item.local}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Faixa Salarial: R${item.faixaSalarial}</p>                                      
                                                <button className="botaoVerVaga"><Link to={{ pathname : '/ListagemVagaEspecifica', state : {IdVaga : item.id} }}>Ver Matchs</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                )
                            })
                        } */}
                    </div>
                </div>
            </main>
            <Rodape />
        </div>

    )

}

export default ListagemVagas;