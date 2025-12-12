import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styles from "./Home.module.css";

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState("none");

    const [page, setPage] = useState(1);
    const ITEMS_PER_PAGE = 15;

    useEffect(() => {
        async function loadProducts() {
            setLoading(true);

            const res = await axios.get("https://dummyjson.com/products?limit=100");

            setProducts(res.data.products);
            setLoading(false);
        }

        loadProducts();
    }, []);

    useEffect(() => {
        async function loadCategories() {
            const res = await axios.get("https://dummyjson.com/products/categories");
            setCategories(res.data);           
        }

        loadCategories();
    }, []);

    let displayed = [...products];

    if (search.trim() !== "") {
        const s = search.toLowerCase();
        displayed = displayed.filter((p) => 
            p.title.toLowerCase().includes(s)
        );
    }

    if (category !== "all") {
        displayed = displayed.filter((p) => p.category === category);
    }

    if (sort === "low-high") {
        displayed = displayed.sort((a,b) => a.price - b.price);
    } else if (sort === "high-low") {
        displayed = displayed.sort((a, b) => b.price - a.price);
    }

    const maxPage = Math.ceil(displayed.length/ITEMS_PER_PAGE) || 1;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const paginated = displayed.slice(start, start + ITEMS_PER_PAGE);

    if (loading) {
        return (
            <div className = {styles.loading}>
                {Array.from({length:12}).map((_, i) => (
                    <div key = {i} className = {styles.animation}/>
                ))}
            </div>    
        );
    }

    return (
        <div className = {styles.container}>

            <div className = {styles.controls}>

                <input 
                id = "search"
                type = "text" 
                placeholder="Search Products..."
                value = {search}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                }}
                className = {styles.input}
                />

                <select
                id = "category"
                value = {category}
                onChange={(e) => {
                    setCategory(e.target.value);
                    setPage(1);
                }}
                className = {styles.select}>
                <option value = "all">
                    All Categories
                </option>
                {categories.map((c) => (
                    <option key = {c.slug} value = {c.slug}>
                        {c.name}
                    </option>
                ))}
                </select>  

                <select
                id = "sort"
                value = {sort}
                onChange = {(e) => setSort(e.target.value)}
                className = {styles.select}
                >
                    <option value="none"> Sort </option>
                    <option value = "low-high">Price: Low → High</option>
                    <option value = "high-low">Price: High → Low</option>
                </select>
            </div>

            {displayed.length === 0 && (
                <div className = {styles.noResults}>
                    No products match your search or filter.
                </div>
            )}
            
            <div className = {styles.grid}>
                {paginated.map(product => (
                    <ProductCard key = {product.id} product = {product} />
                ))}
            </div>
        
        {displayed.length > 0 && (
            <div className = {styles.pagination}>
                <button
                    onClick = {() => setPage(1)}
                    disabled = {page === 1}
                    className = {styles.pageBtn}
                >
                     First
                </button>    

                <button
                    onClick = {() => setPage((p) => Math.max(p - 1, 1))}
                    disabled = {page === 1}
                    className = {styles.pageBtn}
                >
                     Previous
                </button>

                <span className = {styles.currentPage}>
                    Page {page} of {maxPage}
                </span>    

                <button
                    onClick={() => setPage((p) => Math.min(p + 1, maxPage))}
                    disabled = {page === maxPage}
                    className = {styles.pageBtn}
                >
                    Next 
                </button>   

                <button
                    onClick = {() => setPage(maxPage)}
                    disabled = {page === maxPage}
                    className = {styles.pageBtn}
                >
                    Last 
                </button>     
            </div>       
         )}
    </div>
    );
}   

export default Home;