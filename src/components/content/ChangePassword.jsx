import React, { useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import { registrationAction } from '../../redux/userActions';
import Modal from '../modal/Modal';
import { getValue } from '@testing-library/user-event/dist/utils';

const ChangePassword = (props) => {
    const [modalType, setModalType] = useState('hidden')
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const oldPasswordChange = (event) => { setOldPassword(event.target.value); };
    const newPasswordChange = (event) => { setNewPassword(event.target.value); };
    const [printedError, setPrintedError] = useState('')
    const dispatch = useDispatch()

    const changePassword = () => {
        setModalType('loader')
        const data = {
            oldPassword: oldPassword,
            newPassword: newPassword,
        }
        dispatch(registrationAction(data))
            .then(() => {
                setModalType('hidden')
            })
            .catch(function (error) {
                setModalType('hidden')
                console.log(error)
                setPrintedError(error)
            });
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
                            value: oldPassword,
                            onChange: oldPasswordChange,
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

                        }} />

                        <Input props={{
                            imageName: 'dots.svg',
                            label: "Repeat password",
                            placeholder: "Repeat your password",
                            password: true,

                        }} />
                    </div>
                    <div className="errors">
                        <div className="error">
                            {printedError}
                        </div>
                    </div>
                    <button className="send_info_button" onClick={changePassword}>
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword