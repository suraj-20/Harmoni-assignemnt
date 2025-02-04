import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Header.css";

const Header = ({ setProducts, scrollToProducts, cartCount }) => {
    const [clicked, setClicked] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/categories");
                setCategories(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredCategories(categories.filter(cat => cat.toLowerCase().includes(query)));
        setIsDropdownOpen(query.length > 0);
    };

    const handleCategorySelect = async (category) => {
        setSearchQuery(category);
        setIsDropdownOpen(false);

        try {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        scrollToProducts(); // Scroll to Products section
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar-section ${isScrolled ? "scrolled" : ""}`}>
            <div className="nav-logo">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div className="navbar-logo">
                    <p>Harmoni</p>
                </div>
            </div>

            <div className="right-section d-flex gap-4">
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Categories</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>More</a></li>
                </ul>

                <div className="searchbox">
                    <div className="relative w-64">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search categories..."
                            className="w-full px-4 py-2 border rounded-md"
                        />
                        {isDropdownOpen && (
                            <ul style={{ position: "absolute" }} className="absolute w-full bg-white border mt-1 shadow-lg rounded-md z-50">
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => handleCategorySelect(category)}
                                        >
                                            {category}
                                        </li>
                                    ))
                                ) : (
                                    <li className="px-4 py-2 text-gray-500">No results found</li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="nav-login-cart">
                    <div>
                        <i className="fa-solid fa-user"></i>
                    </div>

                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className="nav-cart-count">{cartCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header