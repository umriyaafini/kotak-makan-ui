import React from 'react';

const buttonStyle = {
    border: '1px solid green',
    borderRadius: '3px',
    fontSize: '18px',
    padding: '8px 24px'
}

const Button = ({children, onClick}) => (
    <button
        style={buttonStyle}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button;
