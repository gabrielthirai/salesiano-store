import styles from './Produtos.module.css'
import {Link} from 'react-router-dom'

import cs from '../../img/counter-strike.svg'
import fc from '../../img/fc.svg'
import gta from '../../img/gta.svg'
import minecraft from '../../img/minecraft-1.svg'
import spider from '../../img/spider-man-3.svg'
import zelda from '../../img/zelda.svg'


function Produtos(){
    return(
        <section>
            <h1 className={styles.titulo}>Jogos</h1>

            <div className={styles.row}>
                <div className={styles.card}>
                    <img src={cs} alt='Logo CS'></img>
                    <h1>Counter Strike 2</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div>    
                <div className={styles.card}>
                    <img src={fc} alt='Logo FC 24'></img>
                    <h1>FC 24</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div> 
                <div className={styles.card}>
                    <img src={gta} alt='Logo GTA'></img>
                    <h1>Grand Theft Auto V</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div> 
                <div className={styles.card}>
                    <img src={minecraft} alt='Logo Minecraft'></img>
                    <h1>Minecraft</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div> 
                <div className={styles.card}>
                    <img src={spider} alt='Logo Spider Man'></img>
                    <h1>Spider Man 2</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div> 
                <div className={styles.card}>
                    <img src={zelda} alt='Logo Zelda'></img>
                    <h1>Zelda: Tears of the Kingdom</h1>
                    <Link to="/carrinho" >Comprar</Link>
                </div> 
                
            </div>   
        </section>
    )
}

export default Produtos