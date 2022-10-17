import React from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import './Navbar.css';
import logo from "./../../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="navbar container">
            <div className="menu">
                <ul className="Navbar-links">
                    <li className="link-border">
                        اموزش بیشتر
                    </li>
                    <li>
                        خانه
                    </li>
                    <li>
                        امکانات
                    </li>
                    <li>
                        دانلود
                    </li>
                    <li>
                        مشترک شوید
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </nav>
    );
}

export default Navbar;
