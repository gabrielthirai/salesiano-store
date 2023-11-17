import { Link } from "react-router-dom"

import styles from './Login.module.css'

function LoginProject(){
    return(

        <form className={styles.form}>
            <input type="text" placeholder="Insira o seu email" className={styles.input}/>
            <input type="password" placeholder="Insira sua senha" className={styles.input}/>

            <Link className={styles.botao} to="/cadastro">Cadastro</Link>
            <input id="enviar" type="submit" name="enviar" value="Enviar" className={styles.botao}/>
        </form>

    )
}

export default LoginProject