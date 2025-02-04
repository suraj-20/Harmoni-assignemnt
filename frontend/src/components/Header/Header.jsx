import React, { useState } from 'react';
import "../../styles/Header.css";

const Header = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    return (
        <>
            {/* <section className="header-section d-flex"> */}
            <div className="navbar-section">
                <div className="nav-logo">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <div className="navbar-logo">
                        {/* <img src={logo} alt="logo" /> */}
                        <p>Harmoni</p>
                    </div>
                </div>

                {/* <ul className={clicked ? "nav-menu active" : "nav-menu"}> */}
                <div className="right-section d-flex gap-4">
                    <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                        <li><a href='/'>Home Page</a></li>
                        <li><a href='/'>Categories</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>More Options</a></li>
                    </ul >
                    <div className="searchbox">
                        <input type="text" name="search" id="" placeholder='What are you looking for?' />
                    </div>
                    <div className="nav-login-cart">
                        {localStorage.getItem("Auth-token") ? (
                            <button
                                onClick={() => {
                                    localStorage.removeItem("Auth-token");
                                    // toast.success("Logged out Successfully.");
                                    window.location.replace("/");
                                }}
                            >
                                Logout
                            </button>
                        ) : (
                            <div >
                                <i className="fa-solid fa-user"></i>
                            </div>
                        )}

                        <div >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div >
                        {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
                    </div >
                </div>
            </div >
            {/* </section > */}
        </>
    )
}

export default Header;
