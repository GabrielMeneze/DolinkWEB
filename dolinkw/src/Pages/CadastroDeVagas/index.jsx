import React, { useState, useEffect } from "react"
import { Form, Button, ProgressBar } from 'react-bootstrap'
import {  useHistory  } from 'react-router-dom';
import warningIcon from '../../imgs/icons/warning.svg'
import Header from "../../components/header";
import Footer from "../../components/footer"
import jwtDecode from 'jwt-decode';
import http from '../../utils/http-axious';
import "./index.css";
import { useToasts } from 'react-toast-notifications';



const CadastroDeVagas = () => {

    const { addToast } = useToasts();

    const history = useHistory();

    const token = localStorage.getItem('token-dolink'); 
    
    const idEmpresa = jwtDecode(token).Id;
    const [skills, setSkills] = useState([])

    const [titulo, setTitulo] = useState("");
    const [faixasalarial, setFaixasalarial] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");
    const [beneficios, setBeneficios] = useState("");

    const [skillItems, setSkillItems] = useState([{
        id : "", nome : "", nivel : 0
    }])

    const setSkillValue = (position, campo, valor) => {
        console.log(campo, valor)
        const atualizarSkillItems = skillItems.map((skillItem, index) => {
            if(index === position){
                return { ...skillItem, [campo.split('|')[0]] : valor.split('|')[0], [campo.split('|')[1]] : valor.split('|')[1], ['nivel'] : valor}
            }

            return skillItem;
        })

        setSkillItems(atualizarSkillItems);
    }

    const mostrarSkills = () => {
        console.log(skillItems)
    }

    const addNovaSkillItem = () => {
        setSkillItems([
            ...skillItems,
            {
                id : "", nome : "", nivel : 0
            }
        ])

        skillItems.push()
    }

    useEffect(() => {
        listarSkills()
    }, [])

    const cadastrar = (event) => {
        event.preventDefault();

        fetch('https://localhost:44338/v1/vagancy/create', {
            method: "POST",
            body: JSON.stringify({
                idEmpresa: idEmpresa,
                titulo: titulo,
                faixasalarial: faixasalarial,
                local: local,
                descricao: descricao,
                beneficios: beneficios,
                especificacoesSkills : skillItems
            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then(resultado => resultado.json())
            .then((resultado) => {
                let a = resultado.mensagem + " " + JSON.stringify(resultado.data);
                // Verifica se a validação for OK e caso seja, informa a resposta
                if(resultado.sucesso) {
                    addToast(resultado.mensagem, { appearance: 'success', autoDismiss : true })
                    history.push('/ListagemVagas');
                } else {
                    addToast(a, { appearance: 'error', autoDismiss : true })
                }
            })
            .catch((err) => console.error(err));
    };

    const listarSkills = () => {
        http.get('https://localhost:44338/v1/skills', {
            method : 'GET'
        })
        .then(resultado =>{
            setSkills(resultado.data.data);
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            <Header />

            <div className="tituloMatch">
                <hr className="linha" />
                <div className="esp"></div>
                    <h1>Cadastrar Vaga</h1>
                <div className="esp"></div>
                <hr className="linha" />
            </div>

            <main className="container_principal_vaga">
                <Form>
                    <fieldset>
                        <legend>Dados da vaga</legend>
                            <div className="campos">
                                <Form.Group controlId="formBasicTitulo">
                                    <Form.Label>Título da vaga</Form.Label>
                                    <Form.Control type="text" placeholder="Informe o título da vaga ..."
                                                    value={titulo} onChange={e => setTitulo(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicRegiao">
                                    <Form.Label>Local da vaga</Form.Label>
                                    <Form.Control type="text" placeholder="Informe o local da vaga ..."
                                                    value={local} onChange={e => setLocal(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Descrição da vaga</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Insira a descrição da vaga ..."
                                                    value={descricao} onChange={e => setDescricao(e.target.value)}/>
                                </Form.Group>
                            </div>
                    </fieldset>
                    <fieldset>
                        <legend>Detalhes</legend>
                            <div className="campos">
                                <Form.Group controlId="formBasicTitulo">
                                        <Form.Label>Faixa salarial</Form.Label>
                                        <Form.Control type="number" placeholder="Informe o título da vaga ..."
                                                        value={faixasalarial} onChange={e => setFaixasalarial(e.target.value)}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicDescricao">
                                    <Form.Label>Descreva os benefícios</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Insira a descrição da vaga ..."
                                                    value={beneficios} onChange={e => setBeneficios(e.target.value)} />
                                </Form.Group>
                            </div>
                    </fieldset>
                    <fieldset>
                        <legend>Skills
                            <button className="botaoAddVaga" type="button" onClick={addNovaSkillItem}>+ adicionar habilidade</button>
                        </legend>
                            <div className="campos">
                            {
                                skillItems.map((skill, index) => {
                                    return (
                                        <div className="selects_style">
                                            <Form.Group controlId="formBasicSkill">
                                                <Form.Control className="select_skill" as="select" value={skill.id + "|" + skill.nome}
                                                    onChange={e => setSkillValue(index, 'id' + '|' + 'nome', e.target.value)}>
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
                                            <Form.Group controlId="formBasicSkillNivel">
                                                <Form.Control className="select_skill_nivel" as="select" value={skill.nivel}
                                                    onChange={e => setSkillValue(index, 'nivel', e.target.value)}>
                                                        <option value="0" hidden>Selecione um nível</option>
                                                        <option value="1">Basico</option>
                                                        <option value="2">Intermediario</option>
                                                        <option value="3">Avançado</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </div>
                                    )
                                })
                            }
                            {/* <div className="list_skills">
                                <thead>
                                    <td>Básico</td>
                                    <td>Intermediário</td>
                                    <td>Avançado</td>
                                </thead>
                                <ul>seu loindo
                                    <ProgressBar variant="success" now={3} max={3}/>
                                </ul>
                            </div> */}
                        </div>
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>
                        <button type="submit" onClick={e => cadastrar(e)}>Salvar cadastro</button>
                    </footer>
                </Form>
            </main>            
            <Footer className="rodapeVagas" />
        </>
    )
}

export default CadastroDeVagas;