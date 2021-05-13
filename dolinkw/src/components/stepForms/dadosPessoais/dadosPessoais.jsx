import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css'

export const DadosPessoais = ({formData, setForm, navigation}) => {


    const { nome, cpf, cep, telefone, email, senha } = formData;
    console.log(navigation);

    return(
        <Container className="container">

            <h1 className="h1Pessoal">Dados Pessoais</h1>

            <div className="textFieldBlock">

            <TextField className="textField"
                label="Nome"
                name="nome"
                value={nome}
                onChange={setForm}/>

            <TextField className="textField"
                label="CPF"
                name="cpf"
                value={cpf}
                onChange={setForm}/>
                
            <TextField className="textField"
                label="CEP"
                name="cep"
                value={cep}
                onChange={setForm}/>

            <TextField className="textField"
                label="Telefone"
                name="telefone"
                value={telefone}
                onChange={setForm}/>

            <TextField className="textField"
                label="Email"
                name="email"
                value={email}
                onChange={setForm}/>

            <TextField className="textField"
                label="Senha"
                name="senha"
                value={senha}
                onChange={setForm}/>

            </div>

            <Button className="botaoProximo"
                variant="contained"
                color="primary"
                onClick={() => navigation.next()}>Próximo</Button>

        </Container>
    );

};