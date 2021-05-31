import './index.css';
import {  url  } from '../../utils/constants';
import React, {useState} from "react"
import { Form } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const CadastroEmpresa = () => {

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [imagem, setImagem] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cep, setCep] = useState('');
    const [regiao, setRegiao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dominio, setDominio] = useState('');

    const cadastrar = (event) =>{
        event.preventDefault();

        fetch(`${url}company/signup`,{
            method: 'POST',
            body: JSON.stringify({
                Nome: nome,
                Email: email,
                Senha: senha,
                Telefone: telefone,
                Imagem: imagem,
                CNPJ: cnpj,
                CEP: cep,
                Regiao: regiao,
                Descricao: descricao,
                Dominio: dominio
            }),
            headers: {
                'content-type': 'application/json'
            }
            })
            .then(response => {
                if(response.ok) {
                    alert("Cadastro realizado com sucesso!");
                    // history.push('/cadastrodevagas');
                }
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

                                    <input className="form-control" placeholder="Nome da Empresa" value={nome} 
                                     onChange={(event) => setNome(event.target.value)}
                                    />

                                </div>

                                <div className="infotextcompany">

                                    <input type="email" className="form-control" placeholder="Email" value={email} 
                                     onChange={(event) => setEmail(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">

                                    <input type="password" className="form-control" placeholder="Senha" value={senha} 
                                     onChange={(event) => setSenha(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">

                                    <input className="form-control" placeholder="Telefone com DDD (Ex: 11 99999-9999)" value={telefone} 
                                     onChange={(event) => setTelefone(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">

                                    <input className="form-control" placeholder="Cnpj" value={cnpj} 
                                     onChange={(event) => setCnpj(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">
                                    
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Cep" value={cep} 
                                     onChange={(event) => setCep(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">
                                    
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Região" value={regiao} 
                                     onChange={(event) => setRegiao(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">
                                    
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Descrição" value={descricao} 
                                     onChange={(event) => setDescricao(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">
                                    
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Domínio" value={dominio} 
                                     onChange={(event) => setDominio(event.target.value)}/>

                                </div>

                                <div className="infotextcompany">
                                    
                                    <input className="form-control" id="exampleInputPassword1" placeholder="Imagem" value={imagem} 
                                     onChange={(event) => setImagem(event.target.value)}/>
                                    {/* <Form.File id="fileCategoria" label="Logo da Empresa" onChange={event => uploadFile(event)} />
                                        {imagem && <img src={imagem} style={{ widht: '120px' }} />} */}
                                     {/* <input type="file" value={imagem} alt="escolha a logo da empresa" id="arquivo" multiple={true} onChange={(event) => setImagem(event.target.files)} /> */}

                                </div>

                                
                                <div className="cadastrar1">

                                    <a className="linkCadastro">Já possui cadastro?</a> 

                                    <a className="loginLink1" href="/login">Login</a>

                                </div>

                                         
                                <div className="btn1">

                                    <button onClick={cadastrar} type="submit" className="cadastroEmpresa">Cadastrar</button>

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