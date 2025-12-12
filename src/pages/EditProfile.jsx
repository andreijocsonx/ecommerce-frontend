import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.css";

function EditProfile() {
    const {user, updateProfile} = useContext(AuthContext);
    const [name, setName] = useState(user.name);
    const [avatar, setAvatar] = useState(user.avatar || "");
    const navigate = useNavigate();

    const handleSave = () => {
        updateProfile ({name, avatar});
        window.showToast("Profile updated!");
        navigate("/profile");
    };

    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.card}>
                <h2 className = {styles.title}> Edit Profile </h2>

                <div className = {styles.avatarPreview}>
                    <img
                        src = {
                            avatar ||
                            user.avatar || 
                            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                        }
                        alt = "avatar"
                    />
                </div>        

                <div className = {styles.form}>
                    <label> Name </label>
                    <input 
                        type = "text"
                        value = {name}
                        onChange = {(e) => 
                            setName (e.target.value)
                        }
                    />

                    <label> Avatar URL </label>
                    <input 
                        type = "text"
                        value = {avatar}
                        onChange = {(e) => setAvatar(e.target.value)}
                        placeholder = "Optional"
                    />

                    <button className = {styles.btnPrimary} onClick = {handleSave}>
                        Save Changes    
                    </button>        

                    <button className = {styles.btnSecondary} onClick = {() => ("/profile")}>
                        Cancel 
                    </button>
                </div>
            </div>
        </div>    
    );
}

export default EditProfile;