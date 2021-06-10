import {useState, React} from 'react';
// import MultiStep from '../../components/multiStepForm'
import {  url  } from '../../utils/constants';
import {useHistory} from 'react-router-dom';
import './index.css';
import { useToasts } from 'react-toast-notifications';

const CadastroProfissional = () => {   

    const { addToast } = useToasts();
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

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
            .then(response => response.json())
            .then(response => {
                if(response.ok) {
                    addToast(response.mensagem, { appearance: 'success', autoDismiss: true })
                    history.push('/login');
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

                                <div className="h1Pessoal1">

                                    <h1 className="h1Pessoal1">Sign Up!</h1>

                                </div>

                                <div className="infotextcompany">

                                    <input className="form-control" placeholder="Nome do Profissional" value={nome} 
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

export default CadastroProfissional;