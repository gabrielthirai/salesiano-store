import { Link } from "react-router-dom"
import styles from './navbar.module.css'
import logo from '../../img/logo.png'

import Container from "./container"

function Navbar(){
    return(
        <nav className={styles.navbar}>
          <Container>
            <Link to="/">
              <img src={logo} alt="Logo Unisalesiano" className={styles.logo}></img>
            </Link>
            <ul className={styles.list}>
              <li className={styles.item}><Link className={styles.texto} to="/" >Home</Link></li>
              <li className={styles.item}><Link className={styles.texto} to="/produtos">Produtos</Link></li>
              <li className={styles.item}><Link className={styles.texto} to="/login">Login</Link></li>
              <li className={styles.item}><Link className={styles.texto} to="/carrinho">Carrinho</Link></li>
            </ul>
          </Container>
        </nav>
        
    )
}
export default Navbar