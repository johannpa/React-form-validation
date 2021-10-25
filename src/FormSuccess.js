import React from 'react';
import img3 from './img/img-3.svg';

const FormSuccess = () => {
    return (
       <div className="form-content-right">
           <div className="form-success">We have received your request!</div>
           <img src={img3} alt="success-image" className="form-img-2" />
       </div>
    );
};

export default FormSuccess;