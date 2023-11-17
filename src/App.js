import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import Home from './components/pages/Home';
import Produtos from './components/pages/Produtos';
import Login from './components/pages/Login';
import Carrinho from './components/pages/Carrinho';

import Navbar from './components/layout/navbar';
import Container from './components/layout/container';
import Footer from './components/layout/footer';
import Cadastro from './components/pages/Cadastro';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Container customClass ="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/carrinho">
            <Carrinho />
          </Route>

          <Route exact path="/cadastro">
            <Cadastro/>
          </Route>

          </Container>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
