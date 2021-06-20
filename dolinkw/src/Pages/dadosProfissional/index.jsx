import React, { useEffect, useState } from 'react';
import '../../Pages/PerfilEmpresa/index.css';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import { Table, Button } from 'react-bootstrap';
import { useToasts } from 'react-toast-notifications';
import { useFormik } from 'formik';
import { url } from '../../utils/constants';
import jwtDecode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import profissionalServico from '../../servicos/empresaServico';

const DadosProfissional = () => {

    const { addToast } = useToasts();

    const history = useHistory();

    const [idEmpresa, setIdEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('');
    const [profissionals, setProfissionals] = useState([]);

    const token = localStorage.getItem('token-dolink');

    const formik = useFormik({
        initialValues: {

            id: 0,
            nome: '',
            email: '',
            telefone: ''

        }
    })

    useEffect(() => {

        listarProfissional();

    }, []);

    const listarProfissional = () => {
        profissionalServico
            .listar()
            .then(resultado => {
                setProfissionals(resultado.data.data);
                console.log(JSON.stringify(profissionals));
            })
            .catch(erro => {
                console.error(`erro ${erro}`);
            })
    }


    const excluir = (event) => {
        event.preventDefault();

        const idProfissional = jwtDecode(token).Id;

        fetch(url + 'professional/remove', {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify({

                Id: idProfissional

            })
        })
            .then(response => response.json())

            .then(response => {
                let a = response.mensagem + " " + JSON.stringify(response.data);
                if (response.sucesso) {
                    console.log(response)
                    addToast(response.mensagem, { appearance: 'success', autoDismiss: true })
                    history.push('/login');
                } else {
                    addToast(a, { appearance: 'error', autoDismiss: true })
                }
                localStorage.removeItem('token-dolink');
                history.push('/')
            })
    }




    return (
        <div className="backgroundColorPages">
            <Header />

            <div className="titulo">
                <hr className="linha" />
                <div className="esp"></div>
                <h1 className="tituloPerfilEmpresa">Perfil - Profissional</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>
            {
                profissionals.filter(item => jwtDecode(token).Id === item.id).map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="SectionItensEmpresas">
                                <input type="text" className="itemPerfilEmpresa" placeholder={item.nome} />
                                <input type="text" className="itemPerfilEmpresa" placeholder={item.email} />
                                <input type="text" className="itemPerfilEmpresa" placeholder={item.telefone} />
                            </div>
                            <div className="sectionDeBotoes">
                                <div>
                                </div>
                                <div className="botoesPerfilEmpresa">
                                    <Button variant="warning" value={item.id} href="/perfilProfissional" >Editar</Button>
                                    <Button variant="danger" onClick={event => excluir(event)} style={{ marginLeft: '40px' }}>Excluir</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Rodape className="rodapePerfilEmpresa" />
        </div>
    )
}
export default DadosProfissional;