import styles from './Home.module.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

import fachada from '../../img/FachadaSalesiano.jpg'
import carlos from '../../img/carlao.jpeg'
import hirai from '../../img/hirai.jpeg'

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
                <img src={hirai} alt='Foto Integrantes'></img>
                <a href='https://www.linkedin.com/in/gabriel-hirai/'><FaLinkedin /></a>
                <a href='https://github.com/gabrielthirai'><FaGithub /></a>

                <h2>Carlos Eduardo de Abreu Francesquini</h2>
                <img src={carlos} alt='Foto Integrantes'></img>
                <a href='https://www.linkedin.com/in/carlos-eduardo-de-abreu-francesquini-101833286/'><FaLinkedin /></a>
                <a href='https://github.com/carlao03'><FaGithub /></a>
            </div>
        </section>

    )
}

export default Home