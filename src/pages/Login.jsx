import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login () {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
        navigate("/");
        window.showToast("Logged in successfully!");
    };

    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.card}>
                <h2 className = {styles.title}> Welcome Back </h2>
                <p className = {styles.subtitle}> Sign in to continue shopping </p>

                <form onSubmit = {handleLogin} className = {styles.form}>
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
                        Login
                    </button>    

                    <Link to = "/register" className = {styles.link}>
                        Don't have an account? <span>Register</span>
                    </Link>
                </form>
            </div>
        </div>    
    );
}

export default Login;