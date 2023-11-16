import styles from './Home.module.css'
import { FaLinkedin } from "react-icons/fa";

import fachada from '../../img/FachadaSalesiano.jpg'

function Home(){
    return(
        <section className={styles.home_container}>
            <div className={styles.inicio}>
                <h1>Bem vindo ao Salesiano Store</h1>
                <p>Sua loja de jogos preferida!</p>
                <img src={fachada} alt='Fachada Unisalesiano'></img>
            </div>

            <div className={styles.integrantes}>
                <h1>Integrantes do Projeto</h1>

                <h2>Gabriel Toshiaki Hirai Takematu</h2>
                <a href='https://www.linkedin.com/in/gabriel-hirai/'><FaLinkedin /></a>
                

                <h2>Carlos Eduardo de Abreu Francesquini</h2>
                <a href='https://www.linkedin.com/in/carlos-eduardo-de-abreu-francesquini-101833286/'><FaLinkedin /></a>
            </div>
        </section>

    )
}

export default Home