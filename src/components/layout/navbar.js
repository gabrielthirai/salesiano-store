import { Link } from "react-router-dom"
import styles from './navbar.module.css'

function Navbar(){
    return(
        <ul className={styles.list}>
        <li className={styles.item}><Link to={"/"} >Home</Link></li>
        <li className={styles.item}><Link to={"/produtos"}>Produtos</Link></li>
        <li className={styles.item}><Link to={"/login"}>Login</Link></li>
        <li className={styles.item}><Link to={"/carrinho"}>Carrinho</Link></li>
      </ul>
    )
}
export default Navbar