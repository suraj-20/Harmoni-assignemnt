import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="shadow-md rounded-lg p-4 w-64" >
            {/* Product Image */}
            <div className="d-flex justify-content-center align-items-center"
                style={{ padding: "40px", background: "rgb(219 219 219 / 88%)", height: "200px", borderRadius: "5px" }}>
                <img style={{ mixBlendMode: "multiply" }} src={props.image} alt={props.title} width="100px" height="100%" className="h-40 object-cover" />
            </div>

            {/* Product Title */}
            <h6 className=" mt-2">
                {props.name.split(" ").slice(0, 2).join(" ").substring(0, 20)}
                {props.name.length > 20 ? "..." : ""}
            </h6>

            {/* Price & Rating */}
            <div className="flex items-center justify-center mt-1">
                <span className="text-orange-500 font-bold text-lg">${props.price}</span>
                {/* <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-400"}>
                            ★
                        </span>
                    ))}
                </div> */}
                <span className="text-gray-500 text-sm ml-1">({props.rating.count})</span>
            </div>

            {/* Add to Cart Button */}
            <button className="bg-black text-white w-100 py-1 mt-3 rounded-md font-medium">
                Add To Cart
            </button>
        </div>
    )
}

export default ProductCard
