import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Pages/Home';
import EscolhaCadastro from './Pages/EscolhaCadastro';
import CadastroProfissional from './Pages/CadastroProfissional';
import CadastroProfissional2 from './Pages/CadastroProfissional2';
import CadastroProfissional3 from './Pages/CadastroProfissional3';
import CadastroDeVagas from './Pages/CadastroDeVagas';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/choosesignup" component={EscolhaCadastro}/>
      <Route path="/cadastroprofissional" component={CadastroProfissional}/>
      <Route path="/cadastroprofissional2" component={CadastroProfissional2}/>
      <Route path="/cadastroprofissional3" component={CadastroProfissional3}/>
      <Route path="/CadastroDeVagas" component={CadastroDeVagas}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

reportWebVitals();
