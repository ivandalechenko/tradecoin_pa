import React from 'react';

const Input = ({ props }) => {
    return (
        <div class="input_block" id="email">
            <img src={"img/pa/login/" + props.imageName} alt={props.imageName} />
            <div class="label_and_input">
                <div class="label">
                    {props.label}
                </div>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default Input