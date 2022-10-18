import './Faq.css';
import Question from './question';
import myData from './date';
import { FaQuestionCircle } from "react-icons/fa";


const Faq = () => {
    return (
        <div className="mybackgrund">
            <div className="mycontainer">
                <div className="faq-icon">
                    <FaQuestionCircle size="30" color="orangered" />
                </div>
                <h3>سوالات متداول</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</p>
                <div className="info">
                    {myData.map((md) => (
                        <Question key={md.id} {...md} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;
