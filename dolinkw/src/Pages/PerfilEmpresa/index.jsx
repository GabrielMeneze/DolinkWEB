import React, {useEffect, useState} from 'react';
import '../../Pages/PerfilEmpresa/index.css';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import {  Table, Button } from 'react-bootstrap';
import empresaServico from '../../servicos/empresaServico';

const PerfilEmpresa = () => {

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeRecrutador, setNomeRecrutador] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [infoEmpresa, setInfoEmpresa] = useState([]);

    useEffect(() => {

        listarEmpresa();

    }, []);

    const listarEmpresa = () => {
        empresaServico
        .listar()
        .then(resultado =>{
            console.log(`resultado ${JSON.stringify(resultado.data)}`);
            setInfoEmpresa(resultado.data.data);
        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }

    return(
        <div>
            <Header />

                <div className="sectionPerfilEmpresa">{

                    <Table>
                    <thead>
                        <tr>
                            <th>Nome da Empresa</th>
                            <th>CNPJ</th>
                            <th>Nome do Recrutador</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Senha</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            infoEmpresa.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.nomeEmpresa}</td>
                                        <td>{item.cnpj}</td>
                                        <td>{item.nomeRecrutador}</td>
                                        <td>{item.telefone}</td>
                                        <td>{item.email}</td>
                                        <td>{item.senha}</td>
                                        <td>
                                            <Button variant="warning" value={item.id} >Editar</Button>
                                            <Button variant="danger" value={item.id} style={{ marginLeft : '40px'}}>Desativar</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </Table>
                }
                </div>
            <Rodape className="rodapePerfilEmpresa"/>
        </div>
    )
}
export default PerfilEmpresa;