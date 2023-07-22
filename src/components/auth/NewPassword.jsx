import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Modal from '../modal/Modal';
import { updatePasswordFromEmailAction } from '../../redux/userActions';
import useInput from '../../validation/useInput';

const NewPassword = () => {
    useEffect(() => {
        document.title = "New password - TradeCoinAI";
    }, []);


    const [serverError, setServerError] = useState('')
    const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 32 })
    const repeatPassword = useInput('', { isEmpty: true, isEquals: password.value })


    const [modalType, setModalType] = useState('hidden')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const updatePassword = () => {
        setModalType('loader')
        const data = {
            newPassword: password.value,
        }
        dispatch(updatePasswordFromEmailAction(data))
            .then(() => {
                setModalType('hidden')
                navigate("/profile")
            })
            .catch(function (error) {
                setModalType('hidden')
                setServerError(error)
            });
    }

    // const { isLoggedIn } = useSelector(state => state.userReducer)
    // if (isLoggedIn) return <Navigate to="/profile" replace />
    return (
        <div className="elements">
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="modal_auth transiton_show_hide" id="modal_auth">
                <div className="modal_auth_inner">
                    <div className="back">
                        <Link to="/login">
                            <img src="img/login/left_arr.svg" />
                            Back to login
                        </Link>
                    </div>
                    <div className="form">
                        <h2 id="modal_h2">
                            Create new password
                        </h2>

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password",
                            password: true,
                            value: password.value,
                            onChange: password.onChange,
                            onBlur: password.onBlur

                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password",
                            password: true,
                            value: repeatPassword.value,
                            onChange: repeatPassword.onChange,
                            onBlur: repeatPassword.onBlur
                        }} />


                        <button className="send_code_btn" id="send_a_code" onClick={updatePassword}>
                            Change password
                        </button>
                        <div className="errors">
                            {
                                serverError
                                    ? <div className='error'>{serverError}</div>
                                    : <></>
                            }
                            {
                                password.isDirty
                                    ?
                                    <>
                                        {password.isEmpty ? <div className='error'>Enter password</div> : <>
                                            {password.maxLength ? <div className='error'>Password length must be no more than 32 characters</div> : <></>}
                                            {password.minLength ? <div className='error'>Password length must be at least 6 characters</div> : <></>}
                                        </>}
                                    </>
                                    : <></>
                            }
                            {
                                repeatPassword.isDirty
                                    ?
                                    <>
                                        {!repeatPassword.isEquals ? <div className='error'>Passwords must match</div> : <></>}
                                    </>
                                    : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="fone">
                    <img src="img/login/line.png" />
                </div>
            </div>
        </div>
    )
}

export default NewPassword