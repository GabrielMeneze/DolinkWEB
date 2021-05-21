import React from 'react';
import './index.css';
import logo from '../../imgs/logo.png'

const Header = () => {


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