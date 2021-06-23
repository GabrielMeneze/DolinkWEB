import {useState, React} from 'react';
import {  url  } from '../../utils/constants';
import {useHistory} from 'react-router-dom';
import {  useToasts  } from 'react-toast-notifications';
import jwtDecode from 'jwt-decode';
import './index.css';

const CadastroProfissional = () => {   

    const { addToast } = useToasts();
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    const login = (email, senha) => {

        fetch(`${url}account/signin`, {
            method: 'POST',
            body: JSON.stringify({

                Email: email,
                Senha: senha

            }),
            headers: {

                'content-type' : 'application/json'

            },
            })
            .then(resultado => resultado.json())
            .then(resultado => {
                if(resultado.sucesso) {
                    console.log(resultado)
                    addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                    localStorage.setItem('token-dolink', resultado.data.token);
                    history.push('/perfilProfissional');
                } else {
                    addToast(resultado.mensagem, { appearance: 'error', autoDismiss : true })
                }
            })
    }

    const cadastrar = (event) =>{
        event.preventDefault();

        fetch(`${url}professional/signup`,{
            method: 'POST',
            body: JSON.stringify({

                Nome: nome,
                Email: email,
                Senha: senha,
                Telefone: telefone

            }),
            headers: {
                'content-type': 'application/json'
            }
            })

            .then(resultado => resultado.json())
            .then(resultado=> {
                let a = resultado.mensagem + " " + JSON.stringify(resultado.data);
                if(resultado.sucesso) {
                    
                    login(email, senha);

                } else {

                    addToast(a, { appearance: 'error', autoDismiss : true })

                }
            })
    }

    return(
        
        <div>
            
            <div className="body2">

                <div className="sectionLargura2">

                    <div className="sectionImagePessoal">

                        <img src="https://media.discordapp.net/attachments/819577034530881567/841297659721678848/unknown.png?" alt="" />

                    </div>

                    <div className="sectionDadosPessoais">


                        <div className="middleSectionPessoal">

                            {/* <MultiStep /> */}

                            <div className="infos">

                                <div className="h1ProfissionalCadastro">

                                    <hr className="linhaCadastro" />
                                    <div className="esp"></div>
                                        <h1>Sign up</h1>
                                    <div className="esp"></div>
                                    <hr className="linhaCadastro" />

                                </div>

                                <div className="infotextprofissional">

                                    <input className="inputProfissionalSign" placeholder="Nome do Profissional" value={nome} 
                                     onChange={(event) => setNome(event.target.value)}
                                    />

                                </div>

                                <div className="infotextprofissional">

                                    <input type="email" className="inputProfissionalSign" placeholder="Email" value={email} 
                                     onChange={(event) => setEmail(event.target.value)}/>

                                </div>

                                <div className="infotextprofissional">

                                    <input type="password" autocomplete="off" className="inputProfissionalSign" placeholder="Senha" value={senha} 
                                     onChange={(event) => setSenha(event.target.value)}/>

                                </div>

                                <div className="infotextprofissional">

                                    <input className="inputProfissionalSign" placeholder="Telefone com DDD (Ex: 11 99999-9999)" value={telefone} 
                                     onChange={(event) => setTelefone(event.target.value)}/>

                                </div>

                                <div className="btnProfissionalSign">

                                    <p>Já possui cadastro?<a href="/login"> Faça Login!</a></p>

                                    <button onClick={cadastrar} type="submit" className="botaoCadastroProfissional">Cadastrar</button>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>

        </div>

    )

}

export default CadastroProfissional;