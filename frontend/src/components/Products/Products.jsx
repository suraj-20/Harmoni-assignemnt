import React, { forwardRef, useState } from "react";
import "../../styles/Product.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModel";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Products = forwardRef(({ products, loading, setCartCount, cartCount }, ref) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating); // Full stars
        const hasHalfStar = rating % 1 !== 0; // Check if there’s a half star

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} style={{ color: "rgba(241, 186, 35, 0.799)" }} />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalfAlt key="half" style={{ color: "rgba(241, 186, 35, 0.799)" }} />);
        }

        while (stars.length < 5) {
            stars.push(<FaRegStar key={stars.length} style={{ color: "rgba(241, 186, 35, 0.799)" }} />);
        }

        return stars;
    }

    return (
        <div className="products-section py-8" ref={ref}>
            <div className=" mx-auto">
                <h5 className="text-red-500 text-lg text-center" style={{ color: "red" }}>Our Products</h5>
                <h2 className="text-2xl font-bold text-center mb-4">Explore our products</h2>

                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <div className="collections">
                        {products.length > 0 ? (
                            products.map((item) => (
                                <ProductCard key={item.id} product={item} handleOpen={handleOpen} renderStars={renderStars} />
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                )}

                <ProductModal product={selectedProduct}
                    isOpen={isOpen}
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                    onClose={handleClose}
                    renderStars={renderStars}
                />
            </div>
        </div>
    );
});

export default Products;
