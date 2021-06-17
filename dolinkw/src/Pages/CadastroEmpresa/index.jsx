import './index.css';
import { url } from '../../utils/constants';
import React, { useState } from "react"
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const CadastroEmpresa = () => {

    const history = useHistory();
    const { addToast } = useToasts();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [arquivo, setArquivo] = useState([]);
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [regiao, setRegiao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dominio, setDominio] = useState('');

    const cadastrar = (event) => {
        event.preventDefault();

        let formdata = new FormData();

        formdata.set('nome', nome);
        formdata.set('email', email);
        formdata.set('senha', senha);
        formdata.set('telefone', telefone);
        formdata.set('cnpj', cnpj);
        formdata.set('cep', cep);
        formdata.set('regiao', regiao);
        formdata.set('descricao', descricao);
        formdata.set('dominio', dominio);
        formdata.append('arquivo', arquivo);

        console.log(formdata);


        fetch(`${url}company/signup`, {
            method: 'POST',
            body: formdata,
            })
            .then(resultado => resultado.json())
            .then(resultado => {
                let a = resultado.mensagem + " " + JSON.stringify(resultado.data);
                if(resultado.sucesso) {

                    addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                    history.push('/login');

                } else {

                    addToast(a, { appearance: 'error', autoDismiss : true })

                }
            })
            .catch(erro => {
                console.error('erro na API ' + erro);
            })
    }


    // const uploadFile = (event) => {
    //     event.preventDefault();

    //     let formdata = new FormData();

    //     formdata.append('arquivo', event.target.files[0]);

    //     fetch(`${url}company/signup`, {
    //         method: 'POST',
    //         body: formdata
    //     })
    //         .then(response => response.json)
    //         .then(data => {
    //             setImagem(data.url)
    //         })
    //         .catch(err => console.error(err))
    // }

    return (

        <div>

            <div className="body2">

                <div className="sectionLargura2">

                    <div className="sectionImagePessoal">

                        <img src="https://media.discordapp.net/attachments/819577034530881567/841297659721678848/unknown.png?width=845&height=939" alt="" />

                    </div>

                    <div className="sectionDadosPessoais" onSubmit={event => cadastrar(event)}>

                        <div className="middleSectionPessoal">

                            <div className="infos">

                                <div className="h1Pessoal1">

                                    <h1 className="h1Pessoal1">Sign Up!</h1>

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" placeholder="Nome da Empresa" value={nome}
                                        onChange={(event) => setNome(event.target.value)}
                                    />

                                </div>

                                <div className="infotextcompany">

                                    <input type="email" className="inputCompanySignup" placeholder="Email" value={email}
                                        onChange={(event) => setEmail(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input type="password" className="inputCompanySignup" placeholder="Senha" value={senha}
                                        onChange={(event) => setSenha(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" placeholder="Telefone com DDD (Ex: 11 99999-9999)" value={telefone}
                                        onChange={(event) => setTelefone(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" placeholder="Cnpj" value={cnpj}
                                        onChange={(event) => setCnpj(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" id="exampleInputPassword1" placeholder="Cep" value={cep}
                                        onChange={(event) => setCep(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" id="exampleInputPassword1" placeholder="Região" value={regiao}
                                        onChange={(event) => setRegiao(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" id="exampleInputPassword1" placeholder="Descrição" value={descricao}
                                        onChange={(event) => setDescricao(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    <input className="inputCompanySignup" id="exampleInputPassword1" placeholder="Domínio" value={dominio}
                                        onChange={(event) => setDominio(event.target.value)} />

                                </div>

                                <div className="infotextcompany">

                                    {/* <input className="form-control" id="exampleInputPassword1" placeholder="Imagem" value={imagem} 
                                     onChange={(event) => setImagem(event.target.value)}/> */}
                                    <Form.File id="fileCategoria" onChange={event => setArquivo(event.target.files[0])} />
                                    {arquivo && <img src={arquivo} style={{ widht: '120px' }} />}

                                </div>


                                <div className="sectionBotaoCadastrarEmpresa">

                                    <p>Já tem conta? <a href="/login">Logue!</a></p>

                                    <button onClick={cadastrar} type="submit">SignUp</button>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default CadastroEmpresa;
