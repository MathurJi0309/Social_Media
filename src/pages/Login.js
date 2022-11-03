import styles from '../styles/login.module.css';
const Login=()=>{
    return(
        <from className={styles.loginForm}>
            <span className={styles.loginSignupHeader}>
                Log In
            </span>
            <div className={styles.field}>
                <input type='email' placeholder='Email'/>
            </div>
            <div className={styles.field}>
                <input type='Password' placeholder='Password'/>
            </div>
            <div className={styles.field}>
                <button>Log In</button>
            </div>
        </from>
    )
}

export default Login;