//import styles
import { FlightTakeoffRounded } from "@mui/icons-material";
import styles from "./auth.module.scss";
//ui helpers from lib

const LoginAnimation = () => {
  return (
    <div className={styles.animationContainer}>
      <div className={styles.animation}>
        <FlightTakeoffRounded />
      </div>
    </div>
  );
};

export default LoginAnimation;
