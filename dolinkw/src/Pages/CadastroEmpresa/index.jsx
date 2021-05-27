import './index.css';
import React, {useState} from "react"

const CadastroEmpresa = () => {

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeRecrutador, setNomeRecrutador] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrar = (event) =>{
        event.preventDefault();

        fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/empresa',{
            method: "POST",
            body: JSON.stringify({
                nomeEmpresa: nomeEmpresa,
                cnpj: cnpj,
                nomeRecrutador: nomeRecrutador,
                telefone: telefone,
                email: email,
                senha: senha,
            }),
            headers: {
                'content-type': 'application/json'
            }
            })
            .then(response => {
                if(response.ok) {
                    alert("Cadastro realizado com sucesso!");
                }
            })
    }

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

                                <div className="infotext">

                                    <input type="text" className="form-control" placeholder="Nome da Empresa" value={nomeEmpresa} 
                                     onChange={(event) => setNomeEmpresa(event.target.value)}
                                    />

                                </div>

                                <div className="infotext">

                                    <input type="text" className="form-control" placeholder="CNPJ" value={cnpj} 
                                     onChange={(event) => setCnpj(event.target.value)}/>

                                </div>

                                <div className="infotext">

                                    <input type="text" className="form-control" placeholder="Nome do Recrutador" value={nomeRecrutador} 
                                     onChange={(event) => setNomeRecrutador(event.target.value)}/>

                                </div>

                                <div className="infotext">

                                    <input type="text" className="form-control" placeholder="Telefone com DDD (Ex: 11 99999-9999)" value={telefone} 
                                     onChange={(event) => setTelefone(event.target.value)}/>

                                </div>

                                <div className="infotext">

                                    <input type="text" className="form-control" placeholder="Email" value={email} 
                                     onChange={(event) => setEmail(event.target.value)}/>

                                </div>

                                <div className="infotext">
                                    
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha" value={senha} 
                                     onChange={(event) => setSenha(event.target.value)}/>

                                </div>

                                
                                <div className="cadastrar1">

                                    <a className="linkCadastro">Já possui cadastro?</a> 

                                    <a className="loginLink1" href="">Login</a>

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