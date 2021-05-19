import {  Card, CardContent, Typography  } from '@material-ui/core';
import {  Field, Form, Formik  } from 'formik';
import {  TextField  } from 'formik-material-ui';

export default function MultiStep() {

    return(

        <Card>
            <CardContent>
                <Formik initialValues={{

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
                    <Form>
                        <Field name="nome" component={TextField} label="Nome"/>
                        <Field name="cpf" component={TextField} label="Cpf"/>
                        <Field name="cep" component={TextField} label="Cep"/>
                        <Field name="telefone" component={TextField} label="Telefone"/>
                        <Field name="email" type="email" component={TextField} label="Email"/>
                        <Field name="senha" type="password" component={TextField} label="Senha"/>
                        <Field name="ultimaEmpresa" component={TextField} label="Última Empresa"/>
                        <Field name="dataInicio" component={TextField} label="Data Início"/>
                        <Field name="dataFinal" component={TextField} label="Data Final"/>
                        <Field name="cargo" component={TextField} label="Cargo"/>
                        <Field name="principaisFuncoes" component={TextField} label="Principais Funções"/>
                        <Field name="linkedin" component={TextField} label="Linkedin"/>
                        <Field name="github" component={TextField} label="GitHub"/>
                        <Field name="sobreMim" component={TextField} label="Sobre Mim"/>
                    </Form>
                </Formik>
            </CardContent>
        </Card>

    )

}