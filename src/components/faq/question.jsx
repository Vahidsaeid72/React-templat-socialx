import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const Question = ({ id, title, info }) => {
    const [showInfo, setShowInfo] = useState(false);


    return (
        <div className="question">
            <header>
                <h4>{title}</h4>
                <button className="rounded-circle-btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus color="orangered" /> : <AiOutlinePlus color="orangered" />}</button>
            </header>
            {showInfo && <p>{info}</p>}
        </div>
    );
}

export default Question;