import React from 'react';

const ProductModal = ({ product, isOpen, onClose, setCartCount, cartCount, renderStars }) => {
    if (!product) return null;

    const handleAddToCart = () => {
        setCartCount(prevCount => prevCount + 1);
    };

    return (
        <div className={`modal fade ${isOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isOpen ? 'block' : 'none' }}>
            {/* <div className="modal-dialog modal-dialog-centered" role="document"> */}
            <div className='product-model' style={{
                backgroundColor: "transparent",
                display: "flex",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px"
            }} role="document" >
                <div className="modal-content p-4">
                    <div className="modal-body p-0">
                        <button type="button" className="close position-absolute" onClick={onClose}
                            style={{ border: "none", background: "none", top: "-14px", left: "-10px", color: "red", fontSize: "20px" }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="row align-items-center no-gutters">
                            <div className=" col-md-6 flex justify-center items-center bg-gray-200 p-4  rounded-lg"
                                style={{ height: "300px", borderRadius: "5px" }}
                            >
                                <img
                                    src={product?.image}
                                    alt={product?.title}
                                    width="100%"
                                    height="100%"
                                    className="max-w-full object-contain "
                                    style={{ mixBlendMode: "multiply" }}
                                />
                            </div>
                            <div className="col-md-6 d-flex flex-column justify-content-between">
                                <div className="">
                                    <h5 className="modal-title">{product?.title.split(" ").slice(0, 2).join(" ").substring(0, 20)}
                                        {product?.title.length > 20 ? "..." : ""}</h5>
                                    <div className="align-items-center gap-2 mt-1 d-flex" style={{ fontSize: "15px", color: "rgba(241, 186, 35, 0.799)" }}>
                                        <div className="flex">{renderStars(product.rating.rate)}</div>
                                        <span className="text-gray-500 text-sm ml-1">({product.rating.count} Reviews)</span>
                                    </div>
                                    <p className="h4 font-weight-bold mb-3" >${product?.price}</p>
                                    <p style={{ fontSize: "12px" }}>{product?.description}</p>
                                    {/* <p className="text-muted" style={{ fontSize: "12px" }}>{product?.description.split(" ").slice(0, 100).join(" ").substring(0, 40)}
                                        {product?.description.length > 60 ? "..." : ""}</p> */}
                                </div>
                                <div className=" rounded-bottom" >
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button">-</button>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Quantity" value={cartCount} />
                                        <div className="input-group-append">
                                            <button onClick={handleAddToCart} className="btn btn-outline-secondary" type="button">+</button>
                                        </div>
                                    </div>
                                    <button onClick={handleAddToCart} className="bg-black text-white w-100 py-2 mt-3 rounded-md font-medium transition-transform duration-200 hover:scale-95">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductModal;