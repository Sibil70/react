import React from 'react';


const NotFound = () => {
    const style = {
        position: 'absolute',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        fontSize: 36,
        color: '#8B0000'
    }
    return (
        <div style={style}>Page Not Found, Sorry ... 
            <span>&#x1f60c;</span>
        </div>
    )
};

export default NotFound;