import React, { useState } from 'react';
import contaServico from '../../servicos/contaServico';
import {  useFormik  } from 'formik';
import './index.css';
import {  Form, Button  } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import {  useToasts  } from 'react-toast-notifications';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const { addToast } = useToasts();

    const history = useHistory();

    const formik = useFormik({

        initialValues :{
            email : '',
            senha : ''

        },
        onSubmit : values => { 
            alert(JSON.stringify(values));
            contaServico
                .logar(values)
                .then(resultado => resultado.json())
                .then(resultado =>{
                    if(resultado.sucesso){
                        //apresenta a notificação
                        addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                        //salva token no localstorage
                        localStorage.setItem('token-dolink', resultado.data.token);
                        console.log(resultado);
                        //redireciona página admin
                        history.push('/');
                    } else {

                        addToast(resultado.mensagem, { appearance: 'error', autoDismiss : true })

                    }
                })
                .catch(erro => {
                    console.error('erro na API ' + erro);
                })
        }
    });

    // const [email, setEmail] = useState('');
    // const [senha, setSenha] = useState('');

    // const logar = (event) => {
    //     event.preventDefault();

    //     fetch(`${url}account/signin`, {
    //         method: 'POST',
    //         body: JSON.stringify({
                
    //             email : email,
    //             senha : senha

    //         }),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     })
    // }

    return (

        <div>
            
            <Form onSubmit={formik.handleSubmit}>

                <div className="bodyLogin">

                    <div className="sectionImageLogin">

                        <img className="loginImage" src="https://media.discordapp.net/attachments/819577034530881567/842753282417885210/unknown.png?width=539&height=676" alt="" />

                    </div>

                    <div className="sectionContentLogin">

                        <div className="middleSectionLogin">
                            
                            <div className="firstLinhaLogin">
                                <img src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" />
                                    <h1>Sign In</h1>
                                <img src="https://cdn.discordapp.com/attachments/836953521751326720/840966116675420200/unknown.png" alt="" />
                            </div>

                            <div className="secondLinhaLogin">

                                <TextField className="textFieldLogin"
                                    label="Informe seu e-mail"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    name="email" required/>

                                <TextField className="textFieldLogin"            
                                    label="Informe sua senha"
                                    type="password"
                                    value={formik.values.senha}
                                    onChange={formik.handleChange}
                                    name="senha" required/>

                                <Button className="botaoLogin" type="submit">Logar!</Button>


                            </div>

                            

                        </div>

                    </div>                

                </div>
            
            </Form>

        </div>

    )

}

export default Login;