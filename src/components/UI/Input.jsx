import React from 'react';

const Input = ({ props }) => {
    return (
        <div className="input_block" id="email">
            <img src={"img/pa/login/" + props.imageName} alt={props.imageName} />
            <div className="label_and_input">
                <div className="label">
                    {props.label}
                </div>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Input