import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

function ProductCard({product}) {
    return (
        <Link to = {`/product/${product.id}`} className = {styles.link}>

            <div className = {styles.card}>
                <img
                src = {product.thumbnail}
                alt = {product.title}
                className = {styles.image}
                />
                <h3 className = {styles.title}>{product.title}</h3>
                <p className = {styles.price}>${product.price}</p>
            </div>    
        </Link>
    );
}

export default ProductCard;