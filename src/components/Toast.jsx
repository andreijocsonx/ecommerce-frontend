import { useEffect } from "react";
import styles from "./Toast.module.css";

function Toast ({message, show, onClose}) {
    useEffect(() => {
        if(!show) return;
        const timer = setTimeout(onClose, 2500);
        return () => clearTimeout(timer);
    },[show]);

    return (
        <div className = {`${styles.toast} ${show ? styles.show : ""}`}>
            {message}
        </div>
    );
}

export default Toast;