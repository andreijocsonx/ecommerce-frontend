import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        register(email, password);
        navigate("/");
        window.showToast("Registered successfully!");
    };

    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.card}>
                <h2 className = {styles.title}> Create Account </h2>
                <p className = {styles.subtitle}> Join us and start shopping </p>

                <form onSubmit = {handleRegister} className = {styles.form}>
                    <input
                        type = "email"
                        placeholder = "Email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required
                    />  

                    <input
                        type = "password"
                        placeholder = "Password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        required
                    />      

                    <button type = "submit" className = {styles.btnPrimary}>
                        Register
                    </button>

                    <Link to = "/login" className = {styles.link}>
                        Already have an account? <span>Login</span>
                    </Link>

                </form>
            </div>
        </div>   
    );
}

export default Register;