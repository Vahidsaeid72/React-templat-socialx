import React, { useEffect } from 'react';
import './Header.css'
import img from './../../assets/phone-header-bg.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className="container">
            <div className="content">
                <div className="text" data-aos="fade-right">
                    <h1> پیشرو در سطح جهانی</h1>
                    <h2>امنیت در همه پلتفرم ها</h2>
                    <h2 id="border-bottom" >  سیستم پیام رسانی</h2>
                    <p>لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت تست</p>
                    <div className="buttons">
                        <button id="btn1">بیان شروع کنیم</button>
                        <button id="btn2">چطوری کار میکنیم</button>
                    </div>
                </div>
                <div className="pic" data-aos="fade-left">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;
