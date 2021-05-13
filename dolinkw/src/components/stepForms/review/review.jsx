import React from 'react';
import Container from '@material-ui/core/Container';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Review = ({formData, navigation}) => {

    const { go } = navigation;

    const {  

        nome,
        cpf,
        cep,
        telefone,
        email,
        senha,
        ultimaEmpresa,
        dataInicio,
        dataFinal,
        cargo,
        principaisFuncoes,
        linkedin,
        github,
        sobreMim,

    } = formData;

    return(

        <Container>
            <h1>Review</h1>
        <RenderAccordion summary="Dados Pessoais" go={go} details={[
            { 'Nome' : nome },
            { 'CPF' : cpf },
            { 'CEP' : cep },
            { 'Telefone' : telefone },
            { 'Email' : email },
            { 'Senha' : senha },
        ]} />

        <RenderAccordion summary="Dados Profissionais" go={go} details={[
            { 'Ultima Empresa' : ultimaEmpresa },
            { 'Data de Início' : dataInicio },
            { 'Data Final' : dataFinal },
            { 'Cargo' : cargo },
            { 'Principais Funções' : principaisFuncoes },
        ]} />

        <RenderAccordion summary="Portfolio" go={go} details={[
            { 'Linkedin' : linkedin },
            { 'GitHub' : github },
            { 'Sobre Mim' : sobreMim },
        ]} />

        <Button

            color="#00C74F"
            variant="contained"
            style={{  marginTop: "1.5rem"  }}

        >
            Cadastrar!

        </Button>

        </Container>

    )

}

export const RenderAccordion = ({   summary, details, go  }) => {

    return(

    <Accordion>

        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
        >{summary  }</AccordionSummary>
        <AccordionDetails>
            <div>

                 { details.map((data, index) => {
                    
                    const objKeys = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return <ListItemText key={index}>{`${objKeys}: ${objValue}`}</ListItemText>

                 }) }

                 <IconButton
                    color="primary"
                    component="span"
                    onClick={() => go(`${summary}`)}

                 ><EditIcon /></IconButton>

            </div>
        </AccordionDetails>

    </Accordion>


    )

}