import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.css';

export const DadosProfissionais = ({formData, setForm, navigation}) => {

    const { ultimaEmpresa, dataInicio, dataFinal, cargo, principaisFuncoes } = formData;
    console.log(navigation);

    return(

        <Container className="container">

            <h1 className="h1Pessoal">Dados Profissionais</h1>
            <div className="textFieldBlock">

                <TextField className="textField"
                    label="Última Empresa"
                    name="ultimaEmpresa"
                    value={ultimaEmpresa}
                    onChange={setForm}/>

                <TextField className="textField"
                    label="Data de Ínicio"
                    name="dataInicio"
                    value={dataInicio}
                    onChange={setForm}/>

                <TextField className="textField"
                    label="Data Final"
                    name="dataFinal"
                    value={dataFinal}
                    onChange={setForm}/>

                <TextField className="textField"
                    label="Cargo"
                    name="cargo"
                    value={cargo}
                    onChange={setForm}/>

            </div>

            <div className="botoesBackAndNext">


            <Button className="botaoProximo2"
                variant="contained"
                color="secondary"
                style={{ marginRight : "1rem" }}
                onClick={() => navigation.previous()}>Voltar</Button>

            <Button className="botaoProximo2"
                variant="contained"
                color="primary"
                onClick={() => navigation.next()}>Próximo</Button>

            </div>


        </Container>



    )

}