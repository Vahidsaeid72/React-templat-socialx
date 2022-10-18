import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='Subscribe'>
            <div className="Subscribe-title">
                <h1>حالا مشترک شوید!</h1>
            </div>
            <div className="Subscribe-input">
                <button>مشترک شدن</button>
                <input type="text" placeholder='ایمیل خود را وارد کنید ...' />
            </div>
            <div className="socials-links">
                <a href="/" className="socials-item">
                    <FaFacebook size={20} />
                </a>
                <a href="/" className="socials-item">
                    <FaTwitter size={20} />
                </a>
                <a href="/" className="socials-item">
                    <FaInstagram size={20} />
                </a>
                <a href="/" className="socials-item">
                    <FaGooglePlusG size={20} />
                </a>
            </div>
        </div>
    );
}

export default Subscribe;
