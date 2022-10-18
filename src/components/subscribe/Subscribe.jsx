import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlusG } from "react-icons/fa";
import './Subscribe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Subscribe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='Subscribe'>
            <div className="Subscribe-title" data-aos="fade-up">
                <h1>حالا مشترک شوید!</h1>
            </div>
            <div className="Subscribe-input" data-aos="fade-up">
                <button>مشترک شدن</button>
                <input type="text" placeholder='ایمیل خود را وارد کنید ...' />
            </div>
            <div className="socials-links" data-aos="fade-up">
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
