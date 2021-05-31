import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications'

import Home from './Pages/Home';
import EscolhaCadastro from './Pages/EscolhaCadastro';
import CadastroProfissional from './Pages/CadastroProfissional';
import CadastroDeVagas from './Pages/CadastroDeVagas';
import CadastroEmpresa from './Pages/CadastroEmpresa';
import EditarVagas from './Pages/EditarVagas';
import ListagemVagas from './Pages/ListagemVagas';
import PerfilEmpresa from './Pages/PerfilEmpresa';
import Login from './Pages/Login';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/choosesignup" component={EscolhaCadastro}/>
      <Route path="/cadastroprofissional" component={CadastroProfissional}/>
      <Route path="/cadastrodevagas" component={CadastroDeVagas}/>
      <Route path="/CadastroEmpresa" component={CadastroEmpresa}/>
      <Route path="/EditarVagas" component={EditarVagas}/>
      <Route path="/ListagemVagas" component={ListagemVagas}/>
      <Route path="/perfilEmpresa" component={PerfilEmpresa}/>
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
