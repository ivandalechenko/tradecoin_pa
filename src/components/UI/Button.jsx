import React from 'react';

const Button = ({ props }) => {
    return (
        <button class="send_info_button">
            {props.text}
        </button>
    )
}

export default Button