import React, {useEffect, useState} from 'react';
import '../../Pages/PerfilEmpresa/index.css';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import {  Table, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import {  useFormik  } from 'formik';
import {  url  } from '../../utils/constants';
import empresaServico from '../../servicos/empresaServico';

const PerfilEmpresa = () => {

    const {addToast} = useToasts();

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [regiao, setRegiao] = useState('');
    const [empresas, setEmpresas] = useState([]);

    const formik = useFormik({
        initialValues : {
            
            id : 0,
            nome: '',
            cnpj : '',
            cep : '',
            regiao : '',
            telefone : ''

        }
    })

    useEffect(() => {

        listarEmpresa();

    }, []);

    const listarEmpresa = () => {
        empresaServico
        .listar()
        .then(resultado =>{
            console.log(`resultado ${JSON.stringify(resultado.data)}`);
            setEmpresas(resultado.data.data);
        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }

    const editar = (event) =>{
        event.preventDefault();

        const empresa = empresas.filter(x => {

            return x.id === event.target.value;

        })

        formik.setValues({
            
            id : empresa[0].id,
            nome : empresa[0].nome,
            cnpj : empresa[0].cnpj,
            cep : empresa[0].cep,
            regiao : empresa[0].regiao,
            telefone : empresa[0].telefone

        })
    }

    const alterar = (event) => {
        event.preventDefault();

        fetch(`${url}company/update`, {
            method: "PUT",
            body: JSON.stringify({
                Nome: nome,
                CNPJ: cnpj,
                CEP: cep,
                Regiao: regiao,
                Telefone: telefone,

            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('Empresa alterada')
                }

                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
            })
            .catch((err) => console.error(err));
    };

    
    const excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + 'company/Delete/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-dolink')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Empresa Excluída!')
                listarEmpresa();
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
                                <th>Nome da Empresa</th>
                                <th>CNPJ</th>
                                <th>CEP</th>
                                <th>Região</th>
                                <th>Telefone</th>

                            </tr>
                        </thead>
                        <tbody>
                        {
                                empresas.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.nome}</td>
                                            <td>{item.cnpj}</td>
                                            <td>{item.cep}</td>
                                            <td>{item.regiao}</td>
                                            <td>{item.telefone}</td>
                                            
                                            <td>
                                                <Button variant="warning" value={item.id} onClick={event => alterar(event)} >Editar</Button>
                                                <Button variant="danger" value={item.id} OnClick={event => excluir(event)} style={{ marginLeft : '40px'}}>Desativar</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    </div>
                </div>
            <Rodape className="rodapePerfilEmpresa"/>
        </div>
    )
}
export default PerfilEmpresa;