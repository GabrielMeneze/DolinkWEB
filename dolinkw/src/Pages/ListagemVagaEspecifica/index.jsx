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
            setVagas(resultado.data.data);
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

                        </tr>
                    </thead>
                    {/* <tbody>
                    {
                        vagas.filter(item => jwtDecode(token).Id === item.empresa).map((item, index) => {
                            return (
                                    <tr key={index}>

                                        <td>{item.titulo}</td>
                                        <td>{item.faixaSalarial}</td>
                                        <td>{item.local}</td>
                                        
                                        <td>
                                            <Button href="/ListagemVagaEspecifica" value={item.id} >Detalhes</Button>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody> */}
                </Table>
                </div>
                </div>
            <Rodape />
        </div>
    )
}

export default ListagemVagaEspecifica;