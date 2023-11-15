import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import Produtos from './pages/produtos'
import Login from './pages/login'
import Carrinho from './pages/carrinho'
import './App.css';
import Navbar from './components/layout/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"><Home /></Route>
        <Route path="/produtos"><Produtos /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/Carrinho"><Carrinho /></Route>
      </Switch>
    </Router>
  );
}

export default App;
