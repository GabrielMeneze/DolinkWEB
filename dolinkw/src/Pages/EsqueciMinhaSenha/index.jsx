import React from 'react'
import Banner from '../../components/banner'
import { Form, Button } from 'react-bootstrap'
import './style.css'

const EsqueciMinhaSenha = () => {
    return (
        <>
            <div class="container_principal">
                <Banner titulo="Recupere sua senha"
                        texto="Bacon ipsum dolor amet kielbasa picanha jerky, flank swine frankfurter  pork loin pig spare ribs."
                        img="https://3hthz41e5xgb3uj7bx32mhb4-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/salarios-profissionais-de-ti-e-ciberseguranca-2.png" />
                <div className="container_form">
                    <div className="titulo">
                        <hr/>
                        <h1>Encontre sua conta</h1>
                        <hr/>
                    </div>
                    <p>Insira seu email para procurar os dados da sua conta</p>

                    <Form className="formulario">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Informe seu email ..." />
                            <Form.Text className="text-muted">
                            Informe o email pertinente a sua conta
                            </Form.Text>
                        </Form.Group>
                        <div className="buttons">
                            <Button variant="secondary" type="submit" className="cancel">
                                Cancelar
                            </Button>
                            <Button variant="success" type="submit" className="confirm">
                                Pesquisar
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default EsqueciMinhaSenha