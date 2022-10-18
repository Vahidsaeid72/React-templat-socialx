import './Faq.css';
import Question from './question';
import myData from './date';
import { FaQuestionCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Faq = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);


    return (
        <div className="mybackgrund">
            <div className="mycontainer">
                <div className="faq-icon" data-aos="fade-up">
                    <FaQuestionCircle size="30" color="orangered" />
                </div>
                <h3 data-aos="fade-up">سوالات متداول</h3>
                <p data-aos="fade-up">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها</p>
                <div className="info" data-aos="fade-up">
                    {myData.map((md) => (
                        <Question key={md.id} {...md} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;
