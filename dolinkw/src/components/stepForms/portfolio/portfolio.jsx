import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./index.css";


export const Portfolio = ({formData, setForm, navigation}) => {

    const { linkedin, github, sobreMim } = formData;

    return(

        <Container className="container">

        <h1 className="h1Pessoal">Portfólio</h1>
        <div className="textFieldBlock">

            <TextField className="textField"
                label="Linkedin"
                name="linkedin"
                value={linkedin}
                onChange={setForm}/>

            <TextField className="textField"
                label="GitHub"
                name="github"
                value={github}
                onChange={setForm}/>

            <TextField className="textField"
                label="Sobre Mim"
                name="sobreMim"
                value={sobreMim}
                onChange={setForm}/>

        </div>

        <div className="botoesBackAndNext">


        <Button className="botaoProximo3"
            variant="contained"
            color="secondary"
            style={{ marginRight : "1rem" }}
            onClick={() => navigation.previous()}>Voltar</Button>

        <Button className="botaoProximo3"
            variant="contained"
            color="primary"
            onClick={() => navigation.next()}>Próximo</Button>

        </div>


    </Container>

    )

}