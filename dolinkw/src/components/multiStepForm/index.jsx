import React from 'react';
import {  useForm, useStep  } from 'react-hooks-helper';
import './index.css'
import {  DadosPessoais } from '../stepForms/dadosPessoais/dadosPessoais';
import {  DadosProfissionais } from '../stepForms/dadosProfissionais/dadosProfissionais';
import {  Portfolio } from '../stepForms/portfolio/portfolio';
import {  Review } from '../stepForms/review/review';
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


const defaultData = {

    nome : "",
    cpf : "",
    cep : "",
    telefone : "",
    email : "",
    senha : "",
    ultimaEmpresa : "",
    dataInicio : "",
    dataFinal : "",
    cargo : "",
    principaisFuncoes : "",
    linkedin : "",
    github : "",
    sobreMim : "",

};

const steps = [

    { id : 'Dados Pessoais' }, 
    { id : 'Dados Profissionais' }, 
    { id : 'Portfolio' }, 
    { id : 'review' }, 

];

export const MultiStepForm = () => {

    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0,

    })

    const props = { formData, setForm, navigation }

    switch(step.id) {

    case 'Dados Pessoais':
        return <DadosPessoais {...props} />
    
    case 'Dados Profissionais':
        return <DadosProfissionais {...props}/>

    case 'Portfolio':
        return <Portfolio {...props}/>
        
    case 'review':
        return <Review {...props}/>
    }

    return(

        <div>
            <h1>MultiStepForm</h1>
        </div>

    );
}
