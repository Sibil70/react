import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({btnText}) => {
    return (
        <div className="form-btn">
            <button className="form-btn__submit" type="submit">{btnText}</button>
        </div>
    )
}

Submit.propTypes = {
    btnText: PropTypes.string
}

export default Submit
