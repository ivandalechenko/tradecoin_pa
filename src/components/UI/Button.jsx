import React from 'react';

const Button = ({ props }) => {
    return (
        <button className="send_info_button">
            {props.text}
        </button>
    )
}

export default Button