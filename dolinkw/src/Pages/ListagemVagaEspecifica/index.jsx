import {  useEffect, useState,  React} from 'react';
import empresaServico from '../../servicos/empresaServico';
import jwtDecode from 'jwt-decode';
import {  Button, Table  } from 'react-bootstrap';
import Header from '../../components/header';
import Rodape from '../../components/footer'

const ListagemVagaEspecifica = (props) => {

    
    const token = localStorage.getItem('token-dolink');  

    const [IdVaga, setIdVaga] = useState(props.location.state.IdVaga);
    const [titulo, setTitulo] = useState('');
    const [faixaSalarial, setFaixaSalarial] = useState('');
    const [local, setLocal] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [descricao, setDescricao] = useState('');
    const [beneficios, setBeneficios] = useState('');
    const [vagas, setVagas] = useState([]);

    useEffect(() => {

        listarVaga();

    }, []);

    const listarVaga = () => {
        empresaServico
        .listarvaga(IdVaga)
        .then(resultado =>{
            setTitulo(resultado.data.data.titulo)
            setFaixaSalarial(resultado.data.data.faixaSalarial)
            setLocal(resultado.data.data.local)
            setDescricao(resultado.data.data.descricao)
            setBeneficios(resultado.data.data.beneficios)
            console.log(resultado.data.data)
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
                            <th>Descrição</th>
                            <th>Benefícios</th>

                        </tr>
                    </thead>
                    <tbody>

                            <td>{titulo}</td>
                            <td>{faixaSalarial}</td>
                            <td>{local}</td>
                            <td>{beneficios}</td>
                            <td>{descricao}</td>

                    </tbody>
                </Table>
                </div>
                </div>
            <Rodape />
        </div>
    )
}

export default ListagemVagaEspecifica;