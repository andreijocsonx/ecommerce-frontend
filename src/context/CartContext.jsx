import { createContext , useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("cart"));
        if (stored) setCart(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(p => p.id === product.id);

            if (exist) {
                return prev.map(p =>
                    p.id === product.id ? {...p, quantity: p.quantity + 1} : p
                );
            }

            return [...prev, {...product, quantity: 1}];
        });
    };

    const removeItem = (id) => {
        setCart(prev => prev.filter(p => p.id !== id));
    };

    const updateQuantity = (id, qty) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? {...item, quantity: qty} : item
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    };

    return (
        <CartContext.Provider
            value = {{ 
                cart,
                addToCart: (product) => {
                    addToCart(product);
                    if (typeof window.showToast === "function") {
                        window.showToast(`${product.title} added to cart`);
                    }
                }, 
                removeItem: (id) => {
                    removeItem(id);
                    if (typeof window.showToast === "function"){
                        window.showToast(`Item removed`);
                    }
                }, 
                updateQuantity,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>    
    );
}