import { Card, CardContent, Typography, Button, Step, Stepper, StepLabel } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { TextField } from 'formik-material-ui';
import cadastrarProfissional from '../../servicos/profissionalServico';
import React, { useState } from 'react';
import profissionalServico from '../../servicos/profissionalServico';

export default function MultiStep() {

    const [nome, setNome] = useState('')

    // const cadastrar = (event) => {

    //     fetch('https://609a8adb0f5a13001721b68b.mockapi.io/api/v1/profissional', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             nome: nome,

    //         }),
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //     })
    //         .then((response) => {
    //             // Verifica se a validação for OK e caso seja, informa a resposta
    //             if (response.ok) return response.json();

    //             // Caso validação não seja OK informa um alert
    //             alert("Dado inválido");
    //         })
    //         .catch((err) => console.error(err));
    // };

    const history = useHistory();

    return (

        <Card>
            <CardContent>
                <FormikStepper 
                    initialValues={{
                        nome: '',
                        cpf: '',
                        cep: '',
                        telefone: '',
                        email: '',
                        senha: '',
                        ultimaEmpresa: '',
                        dataInicio: '',
                        dataFinal: '',
                        cargo: '',
                        principaisFuncoes: '',
                        linkedin: '',
                        github: '',
                        sobreMim: ''

                    }} onSubmit={(values) => { 

                        alert(JSON.stringify(values));
                        profissionalServico
                            .cadastrarProfissional(values)
                            .then(resultado => resultado.json())
                            .then(resultado =>{
                                if(resultado.sucesso){
                                  // addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                                  //apresenta a notificação
                                    alert(resultado.mensagem)
                                    //redireciona página admin
                                    history.push('/login');
                                } else {
            
                                    alert(resultado.mensagem)
            
                                }
                            })
                            .catch(erro => {
                                console.error('erro na API ' + erro);
                            })

                    }}>
                    <FormikStep label="Dados Pessoais">
                        <Field name="nome" component={TextField} label="Nome" />
                        <Field name="cpf" component={TextField} label="Cpf" />
                        <Field name="cep" component={TextField} label="Cep" />
                        <Field name="telefone" component={TextField} label="Telefone" />
                        <Field name="email" type="email" component={TextField} label="Email" />
                        <Field name="senha" type="password" component={TextField} label="Senha" />
                    </FormikStep>

                    <FormikStep label="Dados Profissionais">
                        <Field name="ultimaEmpresa" component={TextField} label="Última Empresa" />
                        <Field name="dataInicio" component={TextField} label="Data Início" />
                        <Field name="dataFinal" component={TextField} label="Data Final" />
                        <Field name="cargo" component={TextField} label="Cargo" />
                        <Field name="principaisFuncoes" component={TextField} label="Principais Funções" />
                    </FormikStep>

                    <FormikStep label="Portfólio">
                        <Field name="linkedin" component={TextField} label="Linkedin" />
                        <Field name="github" component={TextField} label="GitHub" />
                        <Field name="sobreMim" component={TextField} label="Sobre Mim" />
                    </FormikStep>
                </FormikStepper>
            {/* <Button onClick={cadastrar}>ooo</Button> */}
            </CardContent>
        </Card>

    )

}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children'> {
    label: string;
}

export function FormikStep({ children }: FormikStepProps) {
    return <>{children}</>
}

export function FormikStepper({ children, ...props }: FormikConfig<FormikValues>) {

    const childrenArray = React.Children.toArray(children) as React.ReactElement<FormikStepProps>[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];

    function IsLastStep() {
        return step === childrenArray.length - 1;
    }


    return (
        <Formik {...props} onSubmit={async (values, helpers) => {

            if (IsLastStep()) {
                await props.onSubmit(values, helpers);
            } else {
                setStep(s => s + 1);
            }

        }}>
            <Form autoComplete="off">

                <Stepper alternativeLabel activeStep={step}>
                {childrenArray.map((child) => (
                 <Step key={child.props.label} >
                    <StepLabel>{child.props.label}</StepLabel>
                </Step>
                ))}
                </Stepper>

                {currentChild}

                {step > 0 ? <Button onClick={() => setStep(s => s - 1)}>Voltar</Button> : null}
                <Button type="submit">{IsLastStep() ? 'Cadastrar' : 'Próximo'} </Button>

            </Form>
        </Formik>


    )
}