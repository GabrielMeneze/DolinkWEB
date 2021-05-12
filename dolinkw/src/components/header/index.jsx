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
                <button className="buttonIn">Sing in</button>
                <button className="buttonUp">Sing Up</button>
            </div>
        </div>

    )

}
export default Header;