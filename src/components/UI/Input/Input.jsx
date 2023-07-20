import React, { useEffect, useState } from 'react';

const Input = ({ props }) => {
    const [inputType, setInputType] = useState('text')
    const [eyeType, setEyeType] = useState('eye')
    useEffect(() => {
        if (props.password) {
            setInputType('password')
            setEyeType('eye_closed')
        }
    }, [])


    return (
        <div className="input_block" id="email">
            <img src={"img/pa/login/" + props.imageName} alt="decor" />
            <div className="label_and_input_and_eye">
                <div className="label_and_input">
                    <div className="label">
                        {props.label}
                    </div>
                    {props.readonly
                        ? <div className='input'>
                            {props.value}
                        </div>
                        : <>{
                            props.username
                                ? <div className='dog_and_input'><div className="dog">@</div><input type={inputType} placeholder={props.placeholder} onChange={props.onChange} value={props.value} onBlur={props.onBlur} /></div>
                                : <><input type={inputType} placeholder={props.placeholder} onChange={props.onChange} value={props.value} onBlur={props.onBlur} /></>
                        }</>


                    }
                </div>
                {
                    props.password
                        ? <img className="eye" src={"img/login/" + eyeType + ".svg"} onClick={() => {
                            if (inputType == 'password') {
                                setEyeType('eye')
                                setInputType('text')
                            } else {
                                setEyeType('eye_closed')
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