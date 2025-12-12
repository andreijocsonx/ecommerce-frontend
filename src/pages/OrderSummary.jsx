import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./OrderSummary.module.css";

function OrderSummary(){
    const {cart, clearCart} = useContext(CartContext);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );
    
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const handlePlaceOrder = () => {
        clearCart();
        window.showToast("Order placed successfully!");
        navigate("/thank-you");
    };

    if(!cart.length){
        return (
            <div className = {styles.pageWrapper}>
                <div className = {styles.emptyCard}>
                    <h2> 
                        Order Summary
                    </h2>

                    <p>
                        Your cart is empty.
                    </p>
                </div>    
            </div>
        );
    }    

    return (
        <div className = {styles.pageWrapper}>
            <div className = {styles.layout}>

                <div className = {styles.itemsCard}>
                    <h2 className = {styles.title}> 
                         Order Summary
                    </h2>

                    <p className = {styles.userLine}>
                        <strong> User: </strong> {user?.email}
                    </p>   

                    {cart.map ((item) => (
                        <div key = {item.id} className = {styles.itemRow}>
                            <div className = {styles.itemInfo}>
                                <h3>
                                    {item.title}
                                </h3>
                            
                                <p>
                                    Quantity: {item.quantity}
                                </p>
                            </div>  
    
                            <div className = {styles.itemPrice}>
                                <p>
                                    ${item.price}
                                </p>

                                <p className = {styles.subtotal}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>    

                <div className = {styles.summaryCard}>
                    <h3> Order Total </h3>

                    <div className = {styles.summaryRow}>
                        <span> Total Items: </span>
                        <strong> ${total.toFixed(2)}</strong>
                    </div>

                    <div className = {styles.summaryRow}>
                        <span> Total Price: </span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>

                    <button className = {styles.placeOrderBtn} onClick = {handlePlaceOrder}>
                        Place Order
                    </button>
                </div>
            </div>
        </div>    
    );
}

export default OrderSummary;