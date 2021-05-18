import React from 'react';
import './index.css';
import {  Form  } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';

const Login = () => {

    return (

        <div>
            
            <Form>

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
                                    name="email"/>

                                <TextField className="textFieldLogin"            
                                    label="Informe sua senha"
                                    type="password"
                                    name="senha"/>

                                <a href="#" class="botaoLogin">
                                    Sign In
                                </a>


                            </div>

                            

                        </div>

                    </div>                

                </div>
            
            </Form>

        </div>

    )

}

export default Login;