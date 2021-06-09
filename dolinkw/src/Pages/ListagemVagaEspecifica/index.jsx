import {  useEffect, useState,  React} from 'react';
import './index.css';
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

                        <div className="sectionInfoVaga">

                            <h1 className="tituloVaga" >{titulo}</h1>
                            <p className="salarioVaga" >Salário: {faixaSalarial}</p>
                            <p className="descricaoVaga" >Descrição: {descricao}</p>

                        </div>

                    </div>
                </div>
            <Rodape />
        </div>
    )
}

export default ListagemVagaEspecifica;