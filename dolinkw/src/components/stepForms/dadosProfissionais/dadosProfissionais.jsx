// import React, { useState } from 'react'
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {  Form  } from 'react-bootstrap';
// import {  url  } from '../../../utils/constants';
// import './index.css';

// export const DadosProfissionais = ({ navigation }) => {

//     // const { ultimaEmpresa, dataInicio, dataFinal, cargo, principaisFuncoes } = formData;
//     // console.log(navigation);

//     const [ultimaEmpresa, setUltimaEmpresa] = useState('');
//     const [dataInicio, setDataInicio] = useState('');
//     const [dataFinal, setDataFinal] = useState('');
//     const [cargo, setCargo] = useState('');
//     const [principaisFuncoes, setPrincipaisFuncoes] = useState('');

//     const cadastro = (event) => {
//         event.preventDefault();

//         fetch(`${url}profissional`, {
//             method: 'POST',
//             body: JSON.stringify({

//                 ultimaEmpresa     : ultimaEmpresa,
//                 dataInicio        : dataInicio,
//                 dataFinal         : dataFinal,
//                 cargo             : cargo,
//                 principaisFuncoes : principaisFuncoes,


//             }),
//             headers: {
//                 'content-type': 'application/json'
//             }
//             })
//     }

//     return(

//         <Container className="container">

//             <Form onSubmit={event => cadastro(event)}>

//             <h1 className="h1Pessoal">Dados Profissionais</h1>
//             <div className="textFieldBlock">

//                 <TextField className="textField"
//                     label="Última Empresa"
//                     name="ultimaEmpresa"
//                     value={ultimaEmpresa}
//                     onChange={event => setUltimaEmpresa(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Data de Ínicio"
//                     name="dataInicio"
//                     value={dataInicio}
//                     onChange={event => setDataInicio(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Data Final"
//                     name="dataFinal"
//                     value={dataFinal}
//                     onChange={event => setDataFinal(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Cargo"
//                     name="cargo"
//                     value={cargo}
//                     onChange={event => setCargo(event.target.value)}/>

//                 <TextField className="textField"
//                     label="Principais Funções"
//                     name="principaisFuncoes"
//                     value={principaisFuncoes}
//                     onChange={event => setPrincipaisFuncoes(event.target.value)}/>

//             </div>

//             <div className="botoesBackAndNext">


//             <Button className="botaoProximo2"
//                 variant="contained"
//                 color="secondary"
//                 style={{ marginRight : "1rem" }}
//                 onClick={() => navigation.previous()}>Voltar</Button>

//             <Button className="botaoProximo2"
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//                 onClick={() => navigation.next()}>Próximo</Button>

//             </div>

//             </Form>


//         </Container>



//     )

// }