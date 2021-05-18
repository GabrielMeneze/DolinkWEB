import React from 'react';
import './index.css';
import logo from '../../imgs/logo.png'

const Header = () => {


    return (

        <body>
            
            <header>

                <div className="header">

                    <div className="header_dentro">

                        <div className="logo_div">

                            <img className="logo" src={logo} alt="" />
                            
                            <div className="botoes_sign">
                                <a href="/login" class="buttonIn">Sign In</a>
                                <a href="/choosesignup" class="buttonUp">Sign Up</a>
                            </div>

                        </div>

                    </div>

                </div>

            </header>

        </body>

    )

}

export default Header;