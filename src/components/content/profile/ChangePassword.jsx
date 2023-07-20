import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button';
import { useDispatch } from 'react-redux';
import { changePasswordAction, registrationAction } from '../../../redux/userActions';
import Modal from '../../modal/Modal';
import { getValue } from '@testing-library/user-event/dist/utils';
import Notification from '../../modal/Notification';

const ChangePassword = (props) => {
    const [modalType, setModalType] = useState('hidden')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const oldPasswordChange = (event) => { setOldPassword(event.target.value); };
    const newPasswordChange = (event) => { setNewPassword(event.target.value); };
    const repeatNewPasswordChange = (event) => { setRepeatNewPassword(event.target.value); };
    const [printedError, setPrintedError] = useState('')
    const dispatch = useDispatch()
    const [notificationShow, setNotificationShow] = useState(false)


    const changePassword = () => {
        if (canChange) {
            setModalType('loader')
            setPrintedError('')
            const data = {
                oldPassword: oldPassword,
                newPassword: newPassword,
            }
            dispatch(changePasswordAction(data))
                .then(() => {
                    setModalType('hidden')
                    setNotificationShow(true)
                })
                .catch(function (error) {
                    setModalType('hidden')
                    setPrintedError(error)
                });
        }
    }
    const [canChange, setCanChange] = useState(false)

    const validatePasswords = () => {

        if (oldPassword.length == 0) {
            setPrintedError('Please enter old password')
            setCanChange(false)
        } else if (newPassword.length == 0) {
            setPrintedError('Please enter new password')
            setCanChange(false)
        } else if (newPassword == oldPassword) {
            setPrintedError('New and old passwords must be different')
            setCanChange(false)
        } else if (newPassword != repeatNewPassword) {
            setPrintedError('New passwords must be the same')
            setCanChange(false)
        } else if (newPassword.length < 6 || oldPassword.length < 6) {
            setPrintedError('Password length must be more than 5 characters')
            setCanChange(false)
        } else {
            setPrintedError('')
            setCanChange(true)
        }
    }

    return (
        <div className="section" id="password">
            <Notification notificationShow={notificationShow} setNotificationShow={setNotificationShow} message={'Password successfuly changed'} />
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
                            value: oldPassword,
                            onChange: oldPasswordChange,
                            onBlur: validatePasswords

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
                            value: newPassword,
                            onChange: newPasswordChange,
                            onBlur: validatePasswords

                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password",
                            password: true,
                            value: repeatNewPassword,
                            onChange: repeatNewPasswordChange,
                            onBlur: validatePasswords


                        }} />
                    </div>
                    <div className="errors">
                        <div className="error">
                            {printedError}
                        </div>
                    </div>
                    <button className={canChange ? "send_info_button" : "send_info_button accept_btn_inactive"} onClick={changePassword}>
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword