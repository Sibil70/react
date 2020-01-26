
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({descript, type, setClass}) => {
    return (
        <>
        <label className="input input-wrap">
            <div className="input__title">{descript}</div>
            <input type={type} className={`input__area ${setClass}`} />
        </label>
        </>
    )
}

Input.propTypes = {
    descript: PropTypes.string,
    type: PropTypes.string, 
    setClass: PropTypes.string,
}

export default Input