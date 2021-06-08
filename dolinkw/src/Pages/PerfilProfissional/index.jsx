import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import {  useFormik  } from 'formik';
import {  url  } from '../../utils/constants';
import {  Table, Button } from 'react-bootstrap';
import jwtDecode from 'jwt-decode';
import profissionalServico from '../../servicos/profissionalServico';
import './index.css';

const PerfilProfissional = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [profissionais, setProfissionais] = useState([]);

    const token = localStorage.getItem('token-dolink');  

    const formik = useFormik({
        initialValues : {
            
            id : 0,
            nome: '',
            email : '',
            telefone : '',

        }
    })

    useEffect(() => {

        listarProfissional();

    }, []);

    const listarProfissional = () => {
        profissionalServico
        .listar()
        .then(resultado =>{
            setProfissionais(resultado.data.data);
        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }

    // const editar = (event) =>{
    //     event.preventDefault();

    //     const empresa = empresas.filter(x => {

    //         return x.id === event.target.value;

    //     })

    //     formik.setValues({
            
    //         id : empresa[0].id,
    //         nome : empresa[0].nome,
    //         cnpj : empresa[0].cnpj,
    //         cep : empresa[0].cep,
    //         regiao : empresa[0].regiao,
    //         telefone : empresa[0].telefone

    //     })
    // }

    const alterar = (event) => {
        event.preventDefault();

        fetch(`${url}professional/update`, {
            method: "PUT",
            body: JSON.stringify({
                Nome: nome,
                Email: email,
                Telefone: telefone

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
                listarProfissional();
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
                               profissionais.filter(item => jwtDecode(token).Id === item.id).map((item, index) => {
                                return (
                                        <tr key={index}>

                                            <div className="itensPerfilProfissional">

                                                                                            
                                                <div className="sectionItensProfissional">

                                                    <input type="text" className="itemPerfilProfissional" placeholder={item.nome}  />
                                                    <input type="text" className="itemPerfilProfissional" placeholder={item.email}  />
                                                    <input type="text" className="itemPerfilProfissional" placeholder={item.telefone}  />

                                                </div>

                                            </div>

                                            <div className="botoesPerfilProfissional">
                                                <Button variant="warning" value={item.id} onClick={event => alterar(event)} >Editar</Button>
                                                <Button variant="danger" value={item.id} OnClick={event => excluir(event)} style={{ marginLeft : '40px'}}>Desativar</Button>
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

export default PerfilProfissional;