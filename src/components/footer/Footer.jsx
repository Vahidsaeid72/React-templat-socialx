import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.png";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaFax,
    FaEnvelope,
    FaGlobe,
} from "react-icons/fa";


const Footer = () => {
    return (
        <section id="footer">
            <div className="container footer">
                <div className="quick-access">
                    <h4>لینک های مفید</h4>
                    <div className="footer-links">
                        <a href="/">&bull; پشتیبانی</a>
                        <a href="/">&bull; درباره ما</a>
                        <a href="/">&bull; آموزش</a>
                        <a href="/">&bull; هاستینگ</a>
                        <a href="/">&bull; پیام رسان</a>
                    </div>
                </div>
                <div className="support">
                    <h4>پشتیبانی</h4>
                    <div className="footer-links">
                        <a href="/">&bull; پشتیبانی</a>
                        <a href="/">&bull; درباره ما</a>
                        <a href="/">&bull; آموزش</a>
                        <a href="/">&bull; هاستینگ</a>
                        <a href="/">&bull; پیام رسان</a>
                    </div>
                </div>
                <div className="contact">
                    <h4>راه های ارتباطی</h4>
                    <div className="footer-contact">
                        <p><FaMapMarkerAlt /> &nbsp; آدرس : نیشابور خیابان بعثت</p>
                        <p><FaPhoneAlt /> &nbsp; تلفن : 09338260185 </p>
                        <p> <FaFax /> &nbsp; فکس : 09338260185</p>
                        <p> <FaEnvelope /> &nbsp; ایمیل : Example@gmail.com</p>
                        <p><FaGlobe /> &nbsp; وبسایت : www.example.com </p>
                    </div>
                </div>
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Footer;

