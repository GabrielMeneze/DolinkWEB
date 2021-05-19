// import React, { useState } from 'react'
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {  Form  } from 'react-bootstrap';
// import {  url  } from '../../../utils/constants';
// import './index.css'

// // usar dentro dos () caso o useState dê errado.
// // {formData, setForm, navigation}
// export const DadosPessoais = ( {navigation} ) => {


//     // definir como formData caso o useState dê errado.
//     // const { nome, cpf, cep, telefone, email, senha } = formData;

//     const [nome, setNome] = useState('');
//     const [cpf, setCpf] = useState('');
//     const [cep, setCep] = useState('');
//     const [telefone, setTelefone] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setSenha] = useState('');

//     const cadastro = (event) => {
//         event.preventDefault();

//         fetch(`${url}profissional`, {
//             method: 'POST',
//             body: console.log(JSON.stringify)({

//                 nome     : nome,
//                 cpf      : cpf,
//                 cep      : cep,
//                 telefone : telefone,
//                 email    : email,
//                 senha    : senha,

//             }),
//             headers: {
//                 'content-type': 'application/json'
//             }
//             })
//     }

//     return(
//         <Container className="container">

//            <Form onSubmit={event => cadastro(event)}>

//                 <h1 className="h1Pessoal">Dados Pessoais</h1>

//                 <div className="textFieldBlock">

//                 <TextField className="textField"
//                     label="Nome"
//                     name="nome"
//                     value={nome}
//                     onChange={event => setNome(event.target.value)}/>

//                 <TextField className="textField"
//                     label="CPF"
//                     name="cpf"
//                     value={cpf}
//                     onChange={event => setCpf(event.target.value)}/>
                    
//                 <TextField className="textField"
//                     label="CEP"
//                     name="cep"
//                     value={cep}
//                     onChange={event => setCep(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Telefone"
//                     name="telefone"
//                     value={telefone}
//                     onChange={event => setTelefone(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Email"
//                     name="email"
//                     value={email}
//                     onChange={event => setEmail(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Senha"
//                     name="senha"
//                     value={senha}
//                     onChange={event => setSenha(event.target.value)}/>

//                 </div>

//                 <Button className="botaoProximo"
//                     variant="contained"
//                     color="primary"
//                     type="submit"
//                     onClick={() => navigation.next()}>Próximo</Button>

//             </Form>

//         </Container>
//     );

// };