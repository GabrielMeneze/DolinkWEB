import React, { useState } from 'react';
import {  useForm, useStep  } from 'react-hooks-helper';
import './index.css'
import {  DadosPessoais } from '../stepForms/dadosPessoais/dadosPessoais';
import {  DadosProfissionais } from '../stepForms/dadosProfissionais/dadosProfissionais';
import Button from '@material-ui/core/Button';
import {  Form  } from 'react-bootstrap';
import {  url  } from '../../utils/constants';
import {  Portfolio } from '../stepForms/portfolio/portfolio';
import {  Review } from '../stepForms/review/review';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


    

const steps = [

    { id : 'Dados Pessoais' }, 
    { id : 'Dados Profissionais' }, 
    { id : 'Portfolio' }, 
    { id : 'review' }, 

];

export const MultiStepForm = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ultimaEmpresa, setUltimaEmpresa] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFinal, setDataFinal] = useState('');
    const [cargo, setCargo] = useState('');
    const [principaisFuncoes, setPrincipaisFuncoes] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [sobreMim, setSobreMim] = useState('');

    const cadastro = (event) => {
        event.preventDefault();

        fetch(`${url}Profissional`, {
            method: 'POST',
            body: JSON.stringify({

                nome     : nome,
                cpf      : cpf,
                cep      : cep,
                telefone : telefone,
                email    : email,
                senha    : senha,
                ultimaEmpresa     : ultimaEmpresa,
                dataInicio        : dataInicio,
                dataFinal         : dataFinal,
                cargo             : cargo,
                principaisFuncoes : principaisFuncoes,
                linkedin  : linkedin,
                github    : github,
                sobreMim  : sobreMim,


            }),
            headers: {
                'content-type': 'application/json'
            }
            })
    }

    const {step, navigation} = useStep({
        steps,
        initialStep: 0,

    })

    const props = { navigation }

    switch(step.id) {

    case 'Dados Pessoais':
        return <DadosPessoais {...props} />
    
    case 'Dados Profissionais':
        return <DadosProfissionais {...props}/>

    case 'Portfolio':
        return <Portfolio {...props}/>
        
    }

    return(

        <div>
            <h1>MultiStepForm</h1>
            <Form >

                <Button className="botaoProximo3"
                        variant="contained"
                        color="primary"
                        type="submit"
                        onSubmit={event => cadastro(event)}>Próximo</Button>

            </Form>
        </div>

    );
}
