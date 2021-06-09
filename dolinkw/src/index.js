import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications'
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';

import LinkedInPage from './Pages/LinkedinReact';
import Home from './Pages/Home';
import EscolhaCadastro from './Pages/EscolhaCadastro';
import CadastroProfissional from './Pages/CadastroProfissional';
import CadastroDeVagas from './Pages/CadastroDeVagas';
import CadastroEmpresa from './Pages/CadastroEmpresa';
import EditarVagas from './Pages/EditarVagas';
import ListagemVagas from './Pages/ListagemVagas';
import ListagemVagaEspecifica from './Pages/ListagemVagaEspecifica';
import PerfilEmpresa from './Pages/PerfilEmpresa';
import Login from './Pages/Login';
import EsqueciMinhaSenha from './Pages/EsqueciMinhaSenha';
import PerfilProfissional from './Pages/PerfilProfissional';
import EditarProfissional from './Pages/EditarProfissional';
import MatchProfissional from './Pages/MatchProfissional';
import AlterarSenha from './Pages/AlterarSenha';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/linkedinpopup" component={LinkedInPopUp} />
      <Route path="/linkedin" component={LinkedInPage} />
      <Route path="/choosesignup" component={EscolhaCadastro}/>
      <Route path="/cadastroprofissional" component={CadastroProfissional}/>
      <Route path="/cadastrodevagas" component={CadastroDeVagas}/>
      <Route path="/CadastroEmpresa" component={CadastroEmpresa}/>
      <Route path="/EditarVagas" component={EditarVagas}/>
      <Route path="/ListagemVagas" component={ListagemVagas}/>
      <Route path="/ListagemVagaEspecifica" component={ListagemVagaEspecifica}/>
      <Route path="/perfilEmpresa" component={PerfilEmpresa}/>
      <Route path="/perfilProfissional" component={PerfilProfissional}/>
      <Route path="/matchProfissional" component={MatchProfissional}/>
      <Route path="/esqueciminhasenha" component={EsqueciMinhaSenha}/>
      <Route path="/EditarProfissional" component={EditarProfissional}/>
      <Route path="/AlterarSenha" component={AlterarSenha}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  <ToastProvider>
    {routing}
  </ToastProvider>,
  document.getElementById('root')
);

reportWebVitals();
