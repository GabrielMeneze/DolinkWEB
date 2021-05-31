import React from 'react';
import './index.css';
import jwt_decode from 'jwt-decode';
import { useHistory} from 'react-router-dom';
import logo from '../../imgs/logo.png'
import {  Nav, NavDropdown  } from 'react-bootstrap';

const Header = () => {

    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-dolink');

        history.push('/');
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-dolink')
    
        if (token === null) {
            return (
                <div className="cabecalho">
                    <div className="logo">
                        <img src={logo} alt="logo da empresa Dolink" />
                    </div>
                    <div className="botoes">
                        <a className="buttonIn" href="/login">Sign In</a>
                        <a className="buttonUp" href="/choosesignup"> Sign Up</a>
                    </div>
                </div>
            );
        } else if (jwt_decode(token).Role === "Empresa") {
            // Role = 2 (Administrador)
            // Role = 3 (Padrão)
            return (
                <div className="cabecalho">
                <div className="logo">
                    <img src={logo} alt="logo da empresa Dolink" />
                </div>
                <div className="botoes">
                    <a className="buttonPerfilCompany" href="/perfilEmpresa">Perfil</a>
                    <a className="buttonCadastroVagasCompany" href="/cadastrodevagas">Cadastro de Vagas</a>
                    <a className="buttonCadastroVagasCompany" href="/EditarVagas">Editar Vaga</a>
                    <a className="buttonCadastroVagasCompany" href="/ListagemVagas">Listagem de Vagas</a>
                    <a className="buttonExitCompany"hreft="" onClick={event => sair(event)}>Sair</a>
                </div>
        </div>
            )
        } else {
            return (
                <div className="cabecalho">
                <div className="logo">
                    <img src={logo} alt="logo da empresa Dolink" />
                </div>
                <div className="botoes">
                    <a className="buttonIn" href="/login">Sign In</a>
                    <a className="buttonUp" href="/choosesignup"> Sign Up</a>
                </div>
        </div>
            )
        }
    }
    

    return (

            <div className="botoes">

                { renderMenu () }

            </div>
    )
}

export default Header;