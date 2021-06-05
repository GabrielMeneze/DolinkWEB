import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Rodape from '../../components/footer';
import { Table, Button, Card } from 'react-bootstrap';
import {  Link  } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import empresaServico from '../../servicos/empresaServico';
import {  useFormik  } from 'formik';

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
        .then(resultado =>{
            setVagas(resultado.data.data);
        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }


    return(

        <div>
            <Header />
                <div className="sectionPerfilEmpresaAltura">

                    <div className="sectionPerfilEmpresaLargura">

                    <Table className="tabelaPerfilEmpresa">

                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Faixa Salarial</th>
                                <th>Local</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                            vagas.filter(item => jwtDecode(token).Id === item.empresa).map((item, index) => {
                                return (
                                        <tr key={index}>

                                            <td>{item.titulo}</td>
                                            <td>{item.faixaSalarial}</td>
                                            <td>{item.local}</td>
                                            
                                            <td>
                                                <Button><Link to={{ pathname : '/ListagemVagaEspecifica', state : {IdVaga : item.id} }}>Detalhes</Link></Button>                                               
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    </div>
                </div>
            <Rodape />
        </div>

    )

}

export default ListagemVagas;