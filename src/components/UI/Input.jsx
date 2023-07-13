import React, { useState } from 'react';

const Input = ({ props }) => {
    const [inputType, setInputType] = useState('password')
    const [eyeType, setEyeType] = useState('eye')
    return (
        <div className="input_block" id="email">
            <img src={"img/pa/login/" + props.imageName} alt="decor" />
            <div className="label_and_input_and_eye">
                <div className="label_and_input">
                    <div className="label">
                        {props.label}
                    </div>
                    <input type={inputType} placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
                </div>
                {
                    props.password
                        ? <img className="eye" src={"img/login/" + eyeType + ".svg"} onClick={() => {
                            if (inputType == 'password') {
                                setEyeType('eye_closed')
                                setInputType('text')
                            } else {
                                setEyeType('eye')
                                setInputType('password')
                            }
                        }} />
                        : <></>
                }
            </div>

        </div>

    )
}

export default Input