import React, { useState } from 'react';
import './index.css';
import {  Form, Button  } from 'react-bootstrap';
import { url } from '../../utils/constants';
import TextField from '@material-ui/core/TextField';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        fetch(`${url}usuario`, {
            method: 'POST',
            body: JSON.stringify({

                email : email,
                senha : senha

            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }


    return (

        <div>
            
            <Form onSubmit={event => logar(event)}>

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
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    name="email" required/>

                                <TextField className="textFieldLogin"            
                                    label="Informe sua senha"
                                    type="password"
                                    value={senha}
                                    onChange={event => setSenha(event.target.value)}
                                    name="senha" required/>

                                <Button class="botaoLogin" type="submit">Logar!</Button>


                            </div>

                            

                        </div>

                    </div>                

                </div>
            
            </Form>

        </div>

    )

}

export default Login;