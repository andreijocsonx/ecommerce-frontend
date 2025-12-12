import { Link } from "react-router-dom";
import styles from "./Checkout.module.css";

function Checkout(){
    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.card}>
                <h2 className = {styles.title}>
                    Checkout
                </h2>

                <p className = {styles.subtitle}>
                    This page is protected. Only logged-in users can see this.
                </p>

                <div className = {styles.progress}>
                    <div className = {`${styles.step} ${styles.active}`}>
                        <span>1</span> Checkout
                    </div>
                    <div className = {styles.line}></div>
                    <div className = {styles.step}>
                        <span>2</span> Order Summary
                    </div>    
                </div>


                <Link to = "/order-summary" className = {styles.btnPrimary}>
                    Continue to Order Summary
                </Link>
            </div>
        </div>    
    );
}

export default Checkout;