import React, { forwardRef, useState } from "react";
import "../../styles/Product.css";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModel";

const Products = forwardRef(({ products, loading }, ref) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="products-section py-8" ref={ref}>
            <div className="container mx-auto">
                <h5 className="text-red-500 text-lg text-center">Our Products</h5>
                <h2 className="text-2xl font-bold text-center mb-4">Explore our products</h2>

                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    <div className="collections">
                        {products.length > 0 ? (
                            products.map((item) => (
                                <ProductCard key={item.id} product={item} handleOpen={handleOpen} />
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                )}

                <ProductModal product={selectedProduct} isOpen={isOpen} onClose={handleClose} />
            </div>
        </div>
    );
});

export default Products;
