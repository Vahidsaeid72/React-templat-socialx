import React from 'react';
import { FaStar, FaBookmark, FaAccessibleIcon, FaHistory, FaReact, FaRegSnowflake } from "react-icons/fa";
import './Features.css'
import pic from './../../assets/phone-features.png';
import FeaturItem from './FeaturItem';
const Features = () => {
    return (
        <div className="features">
            <div className="container">
                <div className="features-content">
                    <div className="features-title">
                        <div className="title-icon">
                            <FaBookmark size={35} color="orangered" />
                            <FaStar size={16} color="#fff" id='star-icon' />
                        </div>
                        <h1>ویژگی های اصلی</h1>
                        <p>لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت تست</p>
                    </div>
                    <div className="features-body">
                        <div className="right-body">
                            <img src={pic} alt="" />
                        </div>
                        <div className="left-body">
                            <FeaturItem
                                icon={<FaAccessibleIcon size={20} />}
                                title={"برای شما طرحی شده است"}
                                text={"لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت بدون محتوای مشخص برای استفاده به صورت تست"}
                            />
                            <FeaturItem
                                icon={<FaHistory size={20} />}
                                title={"تاریخچه خود را حفظ کنید"}
                                text={"لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت بدون محتوای مشخص برای استفاده به صورت تست"}
                            />
                            <FeaturItem
                                icon={<FaReact size={20} />}
                                title={"در ارتباط باش"}
                                text={"لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت بدون محتوای مشخص برای استفاده به صورت تست"}
                            />
                            <FeaturItem
                                icon={<FaRegSnowflake size={20} />}
                                title={"کنترل را به دست گرفتن"}
                                text={"لورم اپسوم متن ساختگی بدون محتوای مشخص برای استفاده به صورت بدون محتوای مشخص برای استفاده به صورت تست"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
