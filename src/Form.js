import React, { useState } from 'react';
import FormSigup from './FormSigup';
import FormSuccess from './FormSuccess'
import img2 from './img/img-2.svg'
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
            <div className="form-container">
                <span className="close-btn"></span>
                <div className="form-content-left">
                    <img src={img2} alt="spaceship" className="form-img" />
                </div>
                {!isSubmitted ? (<FormSigup submitForm={submitForm} />) : (<FormSuccess/>)}
            </div>
        </>
    );
};

export default Form;