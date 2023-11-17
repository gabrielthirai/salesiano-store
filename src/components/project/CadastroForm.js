import styles from './Cadastro.module.css'


function CadastroForm(){
    return (
        <form className={styles.form}>
            <label>Email:</label>
            <input type="text" name="email" id="email" placeholder="Digite seu email" required="email" className={styles.input}/>
            <label>Senha:</label>
            <input type="password" name="senha" id="senha" placeholder="Digite sua senha" required  className={styles.input}/>
            <label>CPF: </label>
            <input type="text" name="cpf" id="cpf" placeholder="CPF" required="cpf" className={styles.input}/>
            <label>Data de nascimento:</label>
            <input type="date" name="nascimento" id="nascimento" required className={styles.input}/>

            <input type="submit" id="cadastrar" name="cadastrar" className={styles.botao}/>
        </form>
    )
}

export default CadastroForm