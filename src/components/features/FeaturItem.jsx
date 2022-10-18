import React from 'react';
import { FiHexagon } from "react-icons/fi";
import './featurItem.css';


const FeaturItem = ({ icon, title, text }) => {
    return (
        <div className="featur-item">
            <div className="icon">
                <FiHexagon size={50} color="orangered" />
                <span id="center-icon">
                    {icon}
                </span>
            </div>
            <div className="item-content">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default FeaturItem;
