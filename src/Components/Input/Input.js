
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({descript, type, setClass, name}) => {
    return (
        <>
        <label className="input input-wrap">
            <div className="input__title">{descript}</div>
            <input type={type} name={name} className={`input__area ${setClass}`} required/>
        </label>
        </>
    )
}

Input.propTypes = {
    descript: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired, 
    setClass: PropTypes.string.isRequired,
}

export default Input