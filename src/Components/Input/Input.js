
import React from 'react';

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

export default Input