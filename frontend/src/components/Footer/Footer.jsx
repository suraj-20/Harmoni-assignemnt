import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="footer-container" style={{ margin: "0px 1.5rem" }}>
                <div className="row">
                    {/* Factory Section */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-normal pb-3 mb-0">Factory</h6>
                        <div className="textwidget">
                            <ul className="conk d-flex flex-column gap-2">
                                <li className="d-flex gap-2">
                                    <i className="fa fa-industry"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        Survey No. 281, Paddhari Neknam Road, Village Neknam,
                                        Tankara, Rajkot 363650, India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mumbai Office Section */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-normal pb-3 mb-0">Mumbai Office</h6>
                        <div className="textwidget">
                            <ul className="conk d-flex flex-column gap-2">
                                <li className="d-flex gap-2">
                                    <i className="fa fa-building"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        No. 15, V N Pawar, Road No. 5, Borivali, Mumbai – 400066,
                                        India
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-normal pb-3 mb-0">Contact Us</h6>
                        <div className="textwidget">
                            <ul className="conk d-flex flex-column gap-2">
                                <li className="d-flex gap-2">
                                    <i className="fa fa-phone-volume"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        Telephone No. +91 72082 09990
                                    </span>
                                </li>
                                <li className="d-flex gap-2">
                                    <i className="fa fa-mobile"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        Mobile No. +91 99302 85087
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-normal pb-3 mb-0">Email</h6>
                        <div className="textwidget">
                            <ul className="conk d-flex flex-column gap-2">
                                <li className="d-flex gap-2">
                                    <i className="fa fa-envelope"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        General - info@vigourgroup.com
                                    </span>
                                </li>
                                <li className="d-flex gap-2">
                                    <i className="fa fa-envelope"></i>{" "}
                                    <span style={{ fontSize: "14px" }}>
                                        Export - export@vigourgroup.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-secondary" />

                {/* Footer Bottom Links */}
                <div className="text-center d-flex mt-3 justify-content-between">
                    <span className="mb-1">
                        <ul
                            className="d-flex footlistk"
                            style={{ fontSize: "12px", color: "GrayText" }}
                        >
                            <li style={{ paddingLeft: "0" }}>
                                <a href="https://www.vigourgroup.com/about-us/">ABOUT US</a>
                            </li>
                            <li>
                                <a href="https://www.vigourgroup.com/industry/">INDUSTRY</a>
                            </li>
                            <li>
                                <a href="https://www.vigourgroup.com/products/">PRODUCTS</a>
                            </li>
                            <li>
                                <a href="https://www.vigourgroup.com/infrastructure/">
                                    INFRASTRUCTURE
                                </a>
                            </li>
                            <li>
                                <a href="https://www.vigourgroup.com/global-development/">
                                    GLOBAL DEVELOPMENT
                                </a>
                            </li>
                            <li style={{ border: "0" }}>
                                <a href="https://www.vigourgroup.com/contact-us/">CONTACT US</a>
                            </li>
                        </ul>{" "}
                    </span>
                    <span className="text-white small" style={{ fontSize: "12px" }}>
                        © 2021 All rights reserved. Design & Developed By Bedigitalimpact
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
