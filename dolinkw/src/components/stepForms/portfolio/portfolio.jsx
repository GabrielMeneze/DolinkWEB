// import React, { useState } from 'react'
// import Container from '@material-ui/core/Container';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import {  Form  } from 'react-bootstrap';
// import {  url  } from '../../../utils/constants';
// import "./index.css";


// export const Portfolio = ({ navigation }) => {

//     // const { linkedin, github, sobreMim } = formData;

//     const [linkedin, setLinkedin] = useState('');
//     const [github, setGithub] = useState('');
//     const [sobreMim, setSobreMim] = useState('');

//     const cadastro = (event) => {
//         event.preventDefault();

//         fetch(`${url}profissional`, {
//             method: 'POST',
//             body: JSON.stringify({

//                 linkedin  : linkedin,
//                 github    : github,
//                 sobreMim  : sobreMim,


//             }),
//             headers: {
//                 'content-type': 'application/json'
//             }
//             })
//     }

//     return(

//         <Container className="container">
//             <Form onSubmit={event => cadastro(event)}>
//                 <h1 className="h1Pessoal">Portfólio</h1>
//                 <div className="textFieldBlock">

//                     <TextField className="textField"
//                         label="Linkedin"
//                         name="linkedin"
//                         value={linkedin}
//                         onChange={event => setLinkedin(event.target.value)}/>

//                     <TextField className="textField"
//                         label="GitHub"
//                         name="github"
//                         value={github}
//                         onChange={event => setGithub(event.target.value)}/>

//                     <TextField className="textField"
//                         label="Sobre Mim"
//                         name="sobreMim"
//                         value={sobreMim}
//                         onChange={event => setSobreMim(event.target.value)}/>

//                 </div>

//                 <div className="botoesBackAndNext">


//                 <Button className="botaoProximo3"
//                     variant="contained"
//                     color="secondary"
//                     style={{ marginRight : "1rem" }}
//                     onClick={() => navigation.previous()}>Voltar</Button>

//                 <Button className="botaoProximo3"
//                     variant="contained"
//                     color="primary"
//                     type="submit">Próximo</Button>

//                 </div>
                
//             </Form>


//     </Container>

//     )

// }