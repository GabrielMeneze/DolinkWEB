import React, {useEffect, useState} from 'react';
import Header from '../../components/header';
import Rodape from '../../components/footer';
import {  useFormik  } from 'formik';
import {  url  } from '../../utils/constants';
import {  Table, Button, ProgressBar, Form } from 'react-bootstrap';
import {  useHistory  } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import profissionalServico from '../../servicos/profissionalServico';
import http from '../../utils/http-axious';
import './index.css';
import { LinkedIn } from '@material-ui/icons';

const PerfilProfissional = () => {
    
    const token = localStorage.getItem('token-dolink');  

    const idProfissional = jwtDecode(token).Id;

    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const [ultimaEmpresa, setUltimaEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [descricaoFuncao, setDescricaoFuncao] = useState('');

    const [repositorio, setRepositorio] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [sobreMim, setSobreMim] = useState('');

    const [profissionais, setProfissionais] = useState([]);
    const [skills, setSkills] = useState([])

    const [skillItems, setSkillItems] = useState([{
        id : "", nome : "", nivel : 0
    }])

    const setSkillValue = (position, campo, valor) => {
        const atualizarSkillItems = skillItems.map((skillItem, index) => {
            if(index === position){
                return { ...skillItem, ['id'] : valor.split('|')[0], ['nome'] : valor.split('|')[1]}
            }

            return skillItem;
        })

        setSkillItems(atualizarSkillItems);
    }

    useEffect(() => {
        listarSkills()
    }, [])

    const addNovaSkillItem = () => {
        setSkillItems([
            ...skillItems,
            {
                id : "", nome : "", nivel : 0
            }
        ])

        skillItems.push()
    }

    const listarSkills = () => {
        http.get('https://localhost:5001/v1/skills', {
            method : 'GET'
        })
        .then(resultado =>{
            setSkills(resultado.data.data);
        })
        .catch((err) => console.log(err))
    }

    const formik = useFormik({
        initialValues : {
            
            id : 0,
            nome: '',
            email : '',
            telefone : '',
            ultimaEmpresa : '',
            cargo : '',
            descricaoFuncao : '',
            repositorio : '',
            linkedin : '',
            sobreMim : ''

        }
    })

    useEffect(() => {

        listarProfissional();

    }, []);

    const listarProfissional = () => {
        profissionalServico
        .listar()
        .then(resultado =>{
            setProfissionais(resultado.data.data);
        })
        .catch(erro =>{
            console.error(`erro ${erro}`);
        })
    }

    // const editar = (event) =>{
    //     event.preventDefault();

    //     const empresa = empresas.filter(x => {

    //         return x.id === event.target.value;

    //     })

    //     formik.setValues({
            
    //         id : empresa[0].id,
    //         nome : empresa[0].nome,
    //         cnpj : empresa[0].cnpj,
    //         cep : empresa[0].cep,
    //         regiao : empresa[0].regiao,
    //         telefone : empresa[0].telefone

    //     })
    // }

    const alterar = (event) => {
        event.preventDefault();

        fetch(`${url}professional/update/general`, {
            method: "PUT",
            body: JSON.stringify({
                
                Id: idProfissional,
                Repositorio: repositorio,
                Linkedin: linkedin,
                SobreMim: sobreMim,
                UltimaEmpresa: ultimaEmpresa,
                Cargo: cargo,
                DescricaoFuncao: descricaoFuncao,
                SkillsProfissional : skillItems


            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('Empresa alterada')
                    history.push('/matchProfissional')
                }

                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
            })
            .catch((err) => console.error(err));
    };

    return(
        <div>
            <Header />

                <form className="sectionPerfilProfissionalAltura" onSubmit={alterar}>

                    <div className="sectionPerfilProfissionalLargura">

                    <Table className="tabelaPerfilEmpresa">

                        <tbody>
                        {
                               profissionais.filter(item => jwtDecode(token).Id === item.id).map((item, index) => {
                                return (
                                        <tr key={index}>

                                            <div className="itensPerfilProfissional">

                                                                                            
                                                <div className="sectionItensProfissional">

                                                    <h2>Finalize seu cadastro com dados adicionais!</h2>

                                                    <div className="sectionDadosAdicionais">

                                                        <div className="portfolioSection">

                                                            <h5>Seu Portfólio</h5>
                                                            <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                value={repositorio} 
                                                                placeholder="Link do GitHub"
                                                                onChange={(event) => setRepositorio(event.target.value)} 
                                                            />

                                                            <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                value={linkedin} 
                                                                placeholder="Link do Linkedin" 
                                                                onChange={(event) => setLinkedin(event.target.value)}
                                                            />

                                                            <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                value={sobreMim} 
                                                                placeholder="Sobre Mim!"
                                                                onChange={(event) => setSobreMim(event.target.value)}  
                                                            />

                                                        </div>
                                                        <div className="dadosProfissionaisSection">

                                                            <h5>Dados Profissionais</h5>
                                                            <input 
                                                                type="text" 
                                                                className="form-control"  
                                                                value={ultimaEmpresa} 
                                                                placeholder="Última Empresa"  
                                                                onChange={(event) => setUltimaEmpresa(event.target.value)}
                                                            />

                                                            <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                value={cargo} 
                                                                placeholder="Cargo"  
                                                                onChange={(event) => setCargo(event.target.value)}
                                                            />

                                                            <input 
                                                                type="text" 
                                                                className="form-control" 
                                                                value={descricaoFuncao} 
                                                                placeholder="Função"  
                                                                onChange={(event) => setDescricaoFuncao(event.target.value)}
                                                            />

                                                        </div>
                                                        <div className="skillsSection">

                                                            <h5>Skills</h5>
                                                            <fieldset>
                                                                <legend>Habilidades requeridas
                                                                    <button type="button" onClick={addNovaSkillItem}>+ adicionar habilidade</button>
                                                                </legend>
                                                                    <div className="campos">
                                                                    {
                                                                        skillItems.map((skill, index) => {
                                                                            return (
                                                                                <div>
                                                                                    <Form.Group controlId="formBasicSkill">
                                                                                        <Form.Control className="select_skill" as="select" value={skill.id + "|" + skill.nome}
                                                                                            onChange={e => setSkillValue(index, 'id', e.target.value)}>
                                                                                                <option value="|" disabled hidden>Selecione uma opção</option>
                                                                                        {
                                                                                            skills.map((item, index) => {
                                                                                                return (
                                                                                                    <option key={item.id} value={item.id + "|" + item.nome}>{item.nome}</option>
                                                                                                ) 
                                                                                            })
                                                                                        }
                                                                                        </Form.Control>
                                                                                    </Form.Group>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </fieldset>

                                                        </div>

                                                        <button
                                                            type="submit"
                                                            className="botao-profissional"
                                                        >Finalizar!</button>

                                                    </div>
                                                </div>

                                            </div>

                                            {/* <div className="botoesPerfilProfissional">
                                                <Button variant="warning" value={item.id} onClick={event => alterar(event)} >Editar</Button>
                                                <Button variant="danger" value={item.id} OnClick={event => excluir(event)} style={{ marginLeft : '40px'}}>Desativar</Button>
                                            </div> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    </div>
                </form>
            <Rodape className="rodapePerfilEmpresa"/>
        </div>
    )

}

export default PerfilProfissional;