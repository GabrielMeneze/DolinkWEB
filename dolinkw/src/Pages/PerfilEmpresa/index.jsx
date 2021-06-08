import React, {useEffect, useState} from 'react';
import '../../Pages/PerfilEmpresa/index.css';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import {  Table, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import {  useFormik  } from 'formik';
import {  url  } from '../../utils/constants';
import jwtDecode from 'jwt-decode';
import {  useHistory  } from 'react-router-dom';
import empresaServico from '../../servicos/empresaServico';

const PerfilEmpresa = () => {

    const {addToast} = useToasts();

    const history = useHistory();

    const [idEmpresa, setIdEmpresa] = useState(0);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [regiao, setRegiao] = useState('');
    const [empresas, setEmpresas] = useState([]);

    const token = localStorage.getItem('token-dolink'); 

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

        console.log(idEmpresa)

        fetch(url + 'company/Delete', {
            method: 'DELETE',
            body: JSON.stringify({
                
                IdEmpresa: idEmpresa

            }),
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-dolink')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Empresa Excluída!')
                history.push('/')
            })
    }

   


    return(
        <div>
            <Header />

                <div className="sectionPerfilEmpresaAltura">

                    <div className="sectionPerfilEmpresaLargura">

                    <Table className="tabelaPerfilEmpresa">

                        

                        <tbody>
                        {
                               empresas.filter(item => jwtDecode(token).Id === item.id).map((item, index) => {
                                return (
                                        <tr key={index}>
                                            
                                            <div className="itensPerfilEmpresa">

                                                
                                                <div className="sectionItensEmpresa">

                                                    <input type="text" className="itemPerfilEmpresa" placeholder={item.nome}  />
                                                    <input type="text" className="itemPerfilEmpresa" placeholder={item.cnpj}  />
                                                    <input type="text" className="itemPerfilEmpresa" placeholder={item.cep}  />
                                                    <input type="text" className="itemPerfilEmpresa" placeholder={item.regiao}  />
                                                    <input type="text" className="itemPerfilEmpresa" placeholder={item.telefone}  />

                                                </div>
                                            
                                            </div>

                                            <div className="botoesPerfilEmpresa">
                                                <Button variant="warning" value={item.id} onClick={event => alterar(event)} >Editar</Button>
                                                <Button variant="danger" value={item.idEmpresa} OnClick={event => excluir(event)} style={{ marginLeft : '40px'}}>Excluir</Button>
                                            </div>
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