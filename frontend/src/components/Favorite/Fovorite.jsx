import React from 'react';
import "../../styles/Favorite.css";

const Fovorite = () => {
    return (
        <>
            <section className='discover-section d-flex align-items-center'>
                <div className='container'>
                    <h2 style={{ color: "white" }}>Discover You Next Favorite Item</h2>
                    <p style={{ color: "white" }}>Browse our exclusive collection and find the perfect product tailored just for you.</p>
                    <div className="discover-buttons d-flex gap-3">
                        <button style={{ width: "80px" }}>Shop</button>
                        <button style={{ width: "130px", backgroundColor: "black", color: "white" }}>Learn More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fovorite
