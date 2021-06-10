import { React, useState, useEffect } from 'react';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import http from '../../utils/http-axious';
import './index.css';

const MatchProfissional = () => {


    const [vagas, setVagas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [local, setLocal] = useState('');
    const [faixaSalarial, setFaixaSalarial] = useState('');

    const token = localStorage.getItem('token-dolink');  

    const idProfissional = jwtDecode(token).Id;

    useEffect(() => {
        listarPreMatch()
    }, [])


    const listarPreMatch = () => {
        http.get('https://localhost:5001/v1/vagancy/matchpre/' + idProfissional, {
            method : 'GET',
        })
        .then(resultado =>{
            setVagas(resultado.data.data);
            console.log(resultado.data.data)
        })
        .catch((err) => console.log(err))
    }


    return(

        <div>
            <Header />
                
                <div className="titulo">
                    <hr className="linha" />
                    <div className="esp"></div>
                    <h1>Matchs</h1>
                    <div className="esp"></div>
                    <hr className="linha" />
                </div>

                <main>
                <div className="estilizacaoDePaginaListagemVaga">

                {
                            vagas.map((item, index) => {
                                return (
                                    <div >

                                        <div className="LinkDeCardListagemdeMatch" >
                                            <div className="cardsDeMatch">
                                                <div className="cardiparaEstilizacaoDeListagemDeMatch">
                                                    <p className="TituloCardaMatch">{item.titulo}</p>
                                                    <p style={{ 'margin-bottom': '0.6em', 'maxWidth' : '95%'  }}>{item.descricao}</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>Faixa Salarial:</p>
                                                    <p style={{ 'margin-bottom': '0.6em' }}>R${item.faixaSalarial}</p>

                                                    <button className="botaoDarMatch" type="submit" >Dar Match!</button>

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

export default MatchProfissional;