import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
    const { cart, removeItem, updateQuantity } = useContext(CartContext);
    const [confirmRemove, setConfirmRemove] = useState(null);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const increment = (item) => updateQuantity(item.id, item.quantity + 1);

    const decrement = (item) => {
        if (item.quantity <= 1) {
            removeItem(item.id);
            window.showToast("Item removed");
        } else {
            updateQuantity(item.id, item.quantity - 1);
        }
    };

    if (cart.length === 0) {
        return (
            <div className={styles.container}>
                <div className={styles.emptyBox}>
                    <h2>Your Cart</h2>
                    <p>No items in cart.</p>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.pageTitle}>Your Cart</h2>

            <div className={styles.layout}>
                <div className={styles.itemsList}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.itemCard}>
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className={styles.thumb}
                            />

                            <div className={styles.info}>
                                <div className={styles.itemHeader}>
                                    <h3>{item.title}</h3>
                                    <button
                                        className={styles.removeSmall}
                                        onClick={() => setConfirmRemove(item.id)}
                                    >
                                        ✖
                                    </button>
                                </div>

                                <p className={styles.price}>${item.price}</p>

                                <div className={styles.qtyControls}>
                                    <button
                                        className={styles.qtyBtn}
                                        onClick={() => decrement(item)}
                                    >
                                        -
                                    </button>

                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => {
                                            const v = Number(e.target.value);
                                            if (v >= 1) updateQuantity(item.id, v);
                                        }}
                                        className={styles.qtyInput}
                                    />

                                    <button
                                        className={styles.qtyBtn}
                                        onClick={() => increment(item)}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.subtotal}>
                                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <button
                                    onClick={() => setConfirmRemove(item.id)}
                                    className={styles.removeBtn}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summaryCard}>
                    <h3>Order Summary</h3>

                    <div className={styles.summaryRow}>
                        <span>Total Items:</span>
                        <strong>{totalItems}</strong>
                    </div>

                    <div className={styles.summaryRow}>
                        <span>Total:</span>
                        <strong>${total.toFixed(2)}</strong>
                    </div>

                    <Link className={styles.checkoutBtn} to="/checkout">
                        Proceed to Checkout →
                    </Link>
                </div>
            </div>

            {confirmRemove !== null && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>Remove item?</h3>
                        <p>This item will be removed from your cart.</p>

                        <div className={styles.modalActions}>
                            <button
                                className={styles.modalRemove}
                                onClick={() => {
                                    removeItem(confirmRemove);
                                    setConfirmRemove(null);
                                }}
                            >
                                Remove
                            </button>

                            <button
                                className={styles.modalCancel}
                                onClick={() => setConfirmRemove(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
