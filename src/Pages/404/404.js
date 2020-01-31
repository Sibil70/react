import React from 'react';
import { Logo } from 'loft-taxi-mui-theme';

const NotFound = () => {
    const style = {
        position: 'absolute',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        fontSize: 36,
        color: '#8B0000',
        display: 'flex',
        alignItems: 'center',
    }
    return (
        <div style={style}>
            <span style={{marginRight: 15}}>Page Not Found, Sorry ...</span> 
            <Logo />
        </div>
    )
};

export default NotFound;