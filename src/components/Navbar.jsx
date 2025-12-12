import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import styles from "./Navbar.module.css";

function Navbar() {
    const {cart} = useContext(CartContext);
    const {user, logout} = useContext(AuthContext);
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <nav className = {styles.nav}>

            <div className = {styles.left}>
                {user ? (
                    <>
                        <span className = {styles.userEmail}> 
                            👤 {user.email} 
                        </span> 

                        <button onClick = {logout} className = {styles.navBtn}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to = "/login" className = {styles.link}>
                        Login
                    </Link>    
                )}      

                <Link to = "/profile" className = {styles.link}>
                    👤 Profile
                </Link>
            </div>   

            <div className = {styles.center}>
                <Link to = "/" className = {styles.brand}>
                    <h2> E-Commerce Demo Store</h2>
                </Link> 
            </div>    
                
            <div className = {styles.right}>
                <button onClick={toggleTheme} className = {styles.themeBtn}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>        

                <Link to = "/cart" className = {styles.cartButton}>
                    🛒
                    <span className = {styles.badge}>
                    {cart.length}
                    </span>    
                </Link>
            </div>    
        </nav>
    );
}

export default Navbar;