import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ product, handleOpen }) => {
    // Function to render star ratings
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
    };
    return (
        <div
            className="shadow-md rounded-lg p-4 w-full sm:w-72 md:w-60 lg:w-64 xl:w-72 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleOpen(product)}
        >
            {/* Product Image */}
            <div className="flex justify-center items-center bg-gray-200 p-4  rounded-lg"
                style={{ background: "rgb(219 219 219 / 88%)", height: "200px", borderRadius: "5px" }}>
                <img
                    src={product.image}
                    alt={product.title}
                    width="100%"
                    height="100%"
                    className="max-w-full object-contain "
                    style={{ mixBlendMode: "multiply" }}
                />
            </div>

            {/* Product Title */}
            <h6 className="mt-2 font-semibold text-lg md:text-base truncate">
                {product.title.split(" ").slice(0, 2).join(" ").substring(0, 20)}
                {product.title.length > 20 ? "..." : ""}
            </h6>

            {/* Price & Rating */}
            <div className="align-items-center gap-2 mt-1 d-flex" style={{ fontSize: "15px", color: "rgba(241, 186, 35, 0.799)" }}>
                <span className="text-orange-500 font-bold text-lg" >${product.price}</span>
                <div className="flex">{renderStars(product.rating.rate)}</div>
                <span className="text-gray-500 text-sm ml-1">({product.rating.count})</span>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-black text-white w-100 py-2 mt-3 rounded-md font-medium transition-transform duration-200 hover:scale-95">
                Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;

