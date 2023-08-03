import React, { useEffect, useState } from 'react';
import Input from '../../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { changePasswordAction } from '../../../redux/userActions';
import Modal from '../../modal/Modal';

import useInput from '../../../validation/useInput';
import { successNotification } from '../../../redux/notificationActions';

const ChangePassword = (props) => {
    const [modalType, setModalType] = useState('hidden')

    const oldPassword = useInput('', { isEmpty: true, minLength: 6, maxLength: 32 })
    const newPassword = useInput('', { isEmpty: true, minLength: 6, maxLength: 32, isNotEquals: oldPassword.value })
    const repeatNewPassword = useInput('', { isEquals: newPassword.value })
    const [serverError, setServerError] = useState('')
    useEffect(() => {
        setServerError('')
    }, [oldPassword.value, newPassword.value, repeatNewPassword.value]);
    const dispatch = useDispatch()
    const changePassword = () => {
        if (oldPassword.isValid && newPassword.isValid && repeatNewPassword.isValid && serverError == '') {
            setModalType('loader')
            const data = {
                oldPassword: oldPassword.value,
                newPassword: newPassword.value,
            }
            dispatch(changePasswordAction(data))
                .then(() => {
                    setModalType('hidden')
                    successNotification('Password successfully changed')
                    oldPassword.reset()
                    newPassword.reset()
                    repeatNewPassword.reset()
                })
                .catch(function (error) {
                    setModalType('hidden')
                    setServerError(error)
                });
        }
    }

    return (
        <div className="section" id="password">
            <Modal modalType={modalType} setModalType={setModalType} />
            <div className="section_header h5">
                Change password
            </div>
            <div className="hr">
            </div>
            <div className="content">
                <div className="img">
                    <img src="img/pa/change_password_lock.png" alt='change password' />
                </div>
                <div className="info">
                    <div className="btn">
                        Old password
                    </div>
                    <div className="form">
                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password",
                            password: true,
                            value: oldPassword.value,
                            onChange: oldPassword.onChange,
                            onBlur: oldPassword.onBlur
                        }} />
                    </div>
                    <div className="btn">
                        New password
                    </div>
                    <div className="form">
                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Your password",
                            placeholder: "Enter your password",
                            password: true,
                            value: newPassword.value,
                            onChange: newPassword.onChange,
                            onBlur: newPassword.onBlur
                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password",
                            password: true,
                            value: repeatNewPassword.value,
                            onChange: repeatNewPassword.onChange,
                            onBlur: repeatNewPassword.onBlur
                        }} />
                    </div>
                    <button className={newPassword.isValid && oldPassword.isValid && repeatNewPassword.isValid && !serverError ? "accept_btn_form accept_btn_valid" : "accept_btn_form"} onClick={changePassword}>Save changes</button>
                    <div className="errors">
                        {
                            serverError
                                ? <div className='error'>{serverError}</div>
                                : <></>
                        }
                        {
                            oldPassword.isDirty
                                ?
                                <>
                                    {oldPassword.isEmpty ? <div className='error'>Enter old password</div> : <>
                                        {oldPassword.maxLength ? <div className='error'>Old password length must be no more than 32 characters</div> : <></>}
                                        {oldPassword.minLength ? <div className='error'>Old password length must be at least 6 characters</div> : <></>}
                                    </>}
                                </>
                                : <></>
                        }
                        {
                            newPassword.isDirty
                                ?
                                <>
                                    {newPassword.isEmpty ? <div className='error'>Enter new password</div> : <>
                                        {newPassword.maxLength ? <div className='error'>New password length must be no more than 32 characters</div> : <></>}
                                        {newPassword.minLength ? <div className='error'>New password length must be at least 6 characters</div> : <></>}
                                        {!newPassword.isNotEquals ? <div className='error'>The new password must be different from the previous one</div> : <></>}
                                    </>}
                                </>
                                : <></>
                        }
                        {
                            repeatNewPassword.isDirty
                                ?
                                <>
                                    {!repeatNewPassword.isEquals ? <div className='error'>New passwords must match</div> : <></>}
                                </>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword