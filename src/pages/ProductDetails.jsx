import { useParams } from "react-router-dom";
import { useEffect , useState , useContext} from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import styles from "./ProductDetails.module.css";

function ProductDetails(){
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart} = useContext(CartContext);

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <h2> Loading...</h2>;

    const switchImage = (i) => {
        setFade(true);
        setTimeout(() => {
            setIndex(i);
            setFade(false);
        }, 150);
    };

    const next = () => {
        const newIndex = (index + 1) % product.images.length;
        switchImage(newIndex);
    };

    const prev = () => {
        const newIndex = index === 0 ? product.images.length - 1 : index - 1;
        switchImage(newIndex);
    };

    return (
        <div className = {styles.container}>
            <div className = {styles.gallery}>
                <div className = {styles.thumbColumn}>
                    {product.images.map((img, i) => (
                        <img 
                            key = {i}
                            src = {img}
                            onClick = {() => switchImage(i)}
                            className = {`${styles.thumb} ${i === index ? styles.active: ""}`}
                        />    
                    ))}
                </div>    

                <div className = {styles.mainWrapper}>
                    <div className = {styles.arrowLeft} onClick = {prev}>←</div>
                    
                    <img 
                    src = {product.images[index]} 
                    alt = {product.title} 
                    className = {`${styles.mainImage} ${fade ? styles.fadeOut : styles.fadeIn}`}
                    />
            
                    <div className = {styles.arrowRight} onClick = {next}>→</div>
                </div>    
            </div>    

            <div className = {styles.info}>
                <h2 className = {styles.title}>{product.title}</h2>
                <p className = {styles.price}>
                    ${product.price}
                </p>

                <p className = {styles.description}>{product.description}</p>

                <button 
                    onClick = {() => addToCart(product)}
                    className = {styles.addBtn}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;