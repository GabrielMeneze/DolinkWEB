import {React, useState, useEffect} from 'react';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import jwtDecode from 'jwt-decode';
import {  url  } from '../../utils/constants';
import './index.css'
import empresaServico from '../../servicos/empresaServico';

const MatchConfirmadoProf = () => {

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');

    const [matchs, setMatchs] = useState([]);

    const [idMatch, setIdMatch] = useState('');

    useEffect(() => {

        listarMatch()

    }, [])

    const token = localStorage.getItem('token-dolink');  
    const idProfissional = jwtDecode(token).Id;

    const listarMatch = () => {

        empresaServico
        .listarmatch(idProfissional)
        .then(resultado => {

            setMatchs(resultado.data.data)
            console.log(resultado.data.data)

        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }

    const excluirMatch = (event, id) => {
        event.preventDefault();

        fetch(url + 'match/remove/' + id, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + token,
                'content-type': 'application/json'
            },
            body: {

                id : id

            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Empresa Excluída!')
            })
    }

    // const excluirMatch = (event, id) => {
    //     event.preventDefault();

    //     empresaServico
    //     .excluirmatch(id)

    //     .then(resultado => {

    //         alert('Match Excluído!');

    //     })
    //     .catch(erro =>{
    //         console.error(`erro ${erro}`);
    //     })

    // }

    return(

        <div>
            <Header />

            <div className="titulo">
                    <hr className="linha" />
                    <div className="esp"></div>
                    <h1>Matchs Confirmados</h1>
                    <div className="esp"></div>
                    <hr className="linha" />
                </div>

                <main>
                <div className="estilizacaoDePaginaListagemVaga">

                {
                            matchs.map((item, index) => {
                                return (
                                    <div >

                                        <div className="LinkDeCardListagemdeMatch" >
                                            <div className="cardsDeMatch">
                                                <div className="cardiparaEstilizacaoDeListagemDeMatch">
                                                    <p className="TituloCardaMatch">{item.dadosVaga.titulo}</p>
                                                    <p style={{ 'margin-bottom': '0.6em', 'maxWidth' : '95%'  }}>{item.dadosVaga.descricao}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Local: {item.dadosVaga.local}</p>
                                                    
                                                    <button onClick={e => excluirMatch(e, item.id)} className="botaoRemoverMatch"  type="submit">Cancelar Match!</button>
                                                    
                                                    {/* <button onClick={console.log(item.id)} className="botaoDarMatch" type="button" >Dar Match!</button> */}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    
                </div>
            </main>

            <Rodape />
        </div>

    )

}

export default MatchConfirmadoProf;