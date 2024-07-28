//styles import
import styles from "./auth.module.scss";
//ui components
import LoginAnimation from "./LoginAnimation";
import LoginOptions from "./LoginOptions";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginAnimation />
      <LoginOptions />
    </div>
  );
};

export default Login;
