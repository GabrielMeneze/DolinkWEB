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
        const token = localStorage.getItem('token-dolink');

        if(token !== null){
            return (
                <Nav>
                    <Nav.Link href="/cadastrodevagas">Pacotes</Nav.Link>
                    <Nav.Link href="/perfilEmpresa">Pacotes</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfilEmpresa">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)} >Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        } else {
        }
    }

    

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

export default Header;