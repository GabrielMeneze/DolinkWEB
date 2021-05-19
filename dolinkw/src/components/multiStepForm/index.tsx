import {  Card, CardContent, Typography, Button, Step, Stepper, StepLabel } from '@material-ui/core';
import {  Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import {  TextField  } from 'formik-material-ui';
import React, {useState} from 'react';

export default function MultiStep() {

    return(

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

                }} onSubmit={() => {} } >
                        <FormikStep label="Dados Pessoais">
                            <Field name="nome" component={TextField} label="Nome"/>
                            <Field name="cpf" component={TextField} label="Cpf"/>
                            <Field name="cep" component={TextField} label="Cep"/>
                            <Field name="telefone" component={TextField} label="Telefone"/>
                            <Field name="email" type="email" component={TextField} label="Email"/>
                            <Field name="senha" type="password" component={TextField} label="Senha"/>
                        </FormikStep>

                        <FormikStep label="Dados Profissionais">
                            <Field name="ultimaEmpresa" component={TextField} label="Última Empresa"/>
                            <Field name="dataInicio" component={TextField} label="Data Início"/>
                            <Field name="dataFinal" component={TextField} label="Data Final"/>
                            <Field name="cargo" component={TextField} label="Cargo"/>
                            <Field name="principaisFuncoes" component={TextField} label="Principais Funções"/>
                        </FormikStep>

                        <FormikStep label="Portfólio">
                            <Field name="linkedin" component={TextField} label="Linkedin"/>
                            <Field name="github" component={TextField} label="GitHub"/>
                            <Field name="sobreMim" component={TextField} label="Sobre Mim"/>
                        </FormikStep>
                </FormikStepper>
            </CardContent>
        </Card>

    )

}

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' > {
    label: string;
} 

export function FormikStep({ children }: FormikStepProps) {
    return <>{children}</>
}

export function FormikStepper({children, ...props}: FormikConfig<FormikValues>) {

    const childrenArray = React.Children.toArray(children) ;
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step] as React.ElementType<FormikStepProps>;

    function IsLastStep() {
       return step === childrenArray.length - 1;
    }

    return(

        <Formik {...props} onSubmit={async (values, helpers) => {

            if(IsLastStep()) {
                await props.onSubmit(values, helpers);
            }else{
                setStep(s=> s+1);
            }

        }}>
            <Form autoComplete="off">

                //ERRO DO PROPS (NAO É DO TIPO 'STRING')
                {/* <Stepper alternativeLabel activeStep={step}>
                {childrenArray.map((child) => (
                 <Step key={child.props.label} >
                    <StepLabel>{child.props.label}</StepLabel>
                </Step>
                ))}
                </Stepper> */}

                {currentChild}
                
                {step > 0 ? <Button onClick={() => setStep(s=> s-1) }>Voltar</Button> : null}
                <Button type="submit">{IsLastStep() ? 'Cadastrar' : 'Próximo'}</Button>

            </Form>
        </Formik>
        
    )
}