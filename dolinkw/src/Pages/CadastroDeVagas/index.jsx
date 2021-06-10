import React, { useState, useEffect } from "react"
import { Form, Button, ProgressBar } from 'react-bootstrap'
import {  useHistory  } from 'react-router-dom';
import warningIcon from '../../imgs/icons/warning.svg'
import Header from "../../components/header";
import Footer from "../../components/footer"
import jwtDecode from 'jwt-decode';
import http from '../../utils/http-axious';
import "./index.css";



const CadastroDeVagas = () => {
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
        const atualizarSkillItems = skillItems.map((skillItem, index) => {
            if(index === position){
                return { ...skillItem, ['id'] : valor.split('|')[0], ['nome'] : valor.split('|')[1]}
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
            .then((response) => {
                // Verifica se a validação for OK e caso seja, informa a resposta
                if (response.ok) {
                    console.log(response.json());
                    alert('Vaga Cadastrada!');
                    history.push('/ListagemVagas')
                } else {
                // Caso validação não seja OK informa um alert
                alert("Dado inválido");
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