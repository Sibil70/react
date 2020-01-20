import React from 'react';

const Submit = ({btnText}) => {
    return (
        <div className="form-btn">
            <button className="form-btn__submit" type="submit">{btnText}</button>
        </div>
    )
}

export default Submit
