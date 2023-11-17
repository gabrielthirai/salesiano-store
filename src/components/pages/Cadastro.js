import CadastroForm from "../project/CadastroForm"

import styles from './Cadastro.module.css'

function Cadastro(){
    return(
        <div className={styles.cadastro}>
            <h1>Cadastro</h1>
            <CadastroForm/>
        </div>
    )
}

export default Cadastro