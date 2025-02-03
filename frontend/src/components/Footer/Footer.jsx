import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-5">
            <div className="container">
                <div className="row">
                    {/* Exclusive Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Exclusive</h5>
                        <p className="fw-bold">Subscribe</p>
                        <p>Get 10% off your first order</p>
                        <div className="input-group">
                            <input
                                type="email"
                                className="form-control bg-dark text-white border-secondary"
                                placeholder="Enter your email"
                            />
                            <button className="btn btn-outline-light">
                                <FaRegPaperPlane />
                            </button>
                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Support</h5>
                        <p>1234, Park Street, DL-11111, India.</p>
                        <p>
                            <a href="mailto:Test@testmail.com" className="text-white">
                                Test@testmail.com
                            </a>
                        </p>
                        <p>+91-999-999-9999</p>
                    </div>

                    {/* Account Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Account</h5>
                        <ul className="list-unstyled">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold">Quick Link</h5>
                        <ul className="list-unstyled">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-4 border-top pt-3">
                    <p className="mb-0">© Copyright Harmoni 2025. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
