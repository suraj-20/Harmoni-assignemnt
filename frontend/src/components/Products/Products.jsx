import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import "../../styles/Product.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [loading]);

    return (
        <div className="products-section">
            <div className="container">
                <h5 style={{ color: "red" }}>Our Products</h5>
                <h2>Explore our products</h2>
                <div className="collections">
                    {products.map((item, i) => {
                        return (
                            <ProductCard
                                key={i}
                                id={item.id}
                                name={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products
