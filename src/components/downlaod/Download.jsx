import React, { useEffect } from 'react';
import { AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import './Download.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className='download' >

            <div className="download-title" data-aos="fade-up">
                <h1>دانلود اپلیکیشن ما</h1>
            </div>
            <div className="download-text" data-aos="fade-up">
                <p>لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت تست</p>
            </div>
            <div className="download-links" data-aos="fade-up">
                <a href="/" className="download-btn">
                    <FaApple size={20} />
                    <p>اپل</p>
                </a>
                <a href="/" className="download-btn">
                    <AiFillAndroid size={20} />
                    <p>اندروید</p>
                </a>
                <a href="/" className="download-btn">
                    <AiFillWindows size={20} />
                    <p>ویندوز</p>
                </a>
            </div>
        </div>
    );
}

export default Download;
