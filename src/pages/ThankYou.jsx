import {Link} from "react-router-dom";
import styles from "./ThankYou.module.css";

function ThankYou() {
    return (
        <div className = {styles.wrapper}>
            <div className = {styles.card}>
                <div className = {styles.icon}>
                    ✔
                </div>

                <h1>
                    Thank You!
                </h1>

                <p>
                    Your order has been placed successfully.
                </p>

                <Link to = "/" className = {styles.btn}>
                    Continue Shopping 
                </Link>
            </div>
        </div>
    );
}

export default ThankYou;