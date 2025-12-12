import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
    const {user, logout} = useContext(AuthContext);

    return (
        <div className = {styles.pageWrapper}>    
            <div className = {styles.card}>    
                <div className = {styles.avatarWrapper}>
                    <img src = {
                        user.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt = "avatar"
                    className = {styles.avatar}
                    />
                </div>    

                <h2 className = {styles.title}> My Profile </h2>

                <div className = {styles.infoBox}>
                    <p><span>Name:</span> {user.name || "No name added"}</p>
                    <p><span>Email:</span> {user.email}</p>
                </div>

                <div className = {styles.actions}>
                    <Link to = "/edit-profile" className = {styles.btnPrimary}>
                        Edit Profile
                    </Link>

                    <button onClick={logout} className = {styles.btnDanger}>
                        Logout
                    </button>
                </div>
            </div>  
        </div>      
    );
}

export default Profile;