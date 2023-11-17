import LoginProject from "../project/LoginForm"

import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginProject />
        </div>
    )
}

export default Login